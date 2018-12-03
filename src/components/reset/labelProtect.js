import React,{Component} from 'react';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import {MenuCmpt} from '../com_cmpts/siderMenu/menu';
import {Button,Modal} from 'antd';
import AddDepartPer from '../com_cmpts/popCmpt/addDepartPer';
import {AddType} from '../com_cmpts/popCmpt/pop.js';
import './reset.css';
const confirm = Modal.confirm;
const treeData = [{
    treename: '项目1',
    key: '0-0',
    treeicon:'file'
}, {
    treename: '项目2',
    key: '0-1',
    treeicon:'file'

}, {
    treename: '项目3',
    key: '0-2',
    treeicon:'file'
}];
class LabelProtect extends Component{
    constructor(){
        super();
        this.state={
            showAddPerPop:false,
            showAddMenu:false,
            title:""
        }
    }
    showPop = (e,type,title) =>{
        e.stopPropagation();
        switch(type){
            case 'addPer':
                this.setState({
                    showAddPerPop:true
                });
            break;
            case 'addMenu':
                this.setState({
                    showAddMenu:true,
                    title:title
                });
            break;
            case "delMenu":
                this.delPop();
            break;
            default:;
        }
    }
    handleCancel = () =>{
        this.setState({
            showAddPerPop:false,
            showAddMenu:false
        });
    }
    delPop =(props) => {
        const _this = this;
        confirm({
            title: '确定删除XXX项目？',
            content:(
                <div style={{color:"#f00"}}>说明：删除项目不会删除项目目录，需手动删除选择目录。</div>
            ),
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                _this.handleDel();
            },
            onCancel() {
                _this.handleCancel();
            },
          });
    }
    render(){
        return (
            <div>
                <div className='l-reset-content'>
                    <div style={{display:this.props.tree === true ? "block" : "none"}} className='l-reset-leftTree'>
                            <h3 className='l-content-h3'>项目选择</h3>
                            <Button type="primary" onClick={(e)=>{this.showPop(e,"addMenu","新增项目")}}>新增</Button>
                            <Button type="primary" onClick={(e)=>{this.showPop(e,"addMenu","修改项目")}}>修改</Button>
                            <Button type="primary" onClick={(e)=>{this.showPop(e,"delMenu")}}>删除</Button>
                            <MenuCmpt treeData={treeData} />
                    </div>
                    <div className='l-reset-centertable'>
                        <Button type="primary" style={{marginBottom:"10px"}}>设为{this.props.tabtype}维护者</Button>
                        <Button type="primary" style={{marginBottom:"10px",float:"right"}} onClick={(e)=>{this.showPop(e,"addPer")}}>添加部门成员</Button>
                        <DataTable rowSel={true} tabletype="setProjectDirector"/>
                    </div>
                    <div style={{width:this.props.role === "depart" ? "50%" : "35%"}} className='l-reset-righttable'>
                        <h3 className='l-content-h3'>已设置{this.props.tabtype}维护者</h3>
                        <DataTable tabletype="delReset" />
                    </div>
                </div>
                <Modal style={{height:"800px"}} width={700} title={"添加项目成员"} visible={this.state.showAddPerPop} onCancel={this.handleCancel} cancelText={"取消"} okText={"确定"}>
                    <AddDepartPer />
                </Modal>
                <AddType title={this.state.title} onChange={this.onChange}  handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddMenu}  />
            </div>
        )
    }
}
export default LabelProtect;