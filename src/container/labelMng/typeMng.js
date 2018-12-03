import React,{Component} from 'react';
import { Breadcrumb,Button,Modal } from 'antd';
import {observer,inject} from 'mobx-react';
import  './label.css';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import {AddType} from '../../components/com_cmpts/popCmpt/pop';
import { SearchInput ,SingleSelection} from '../../components/com_cmpts/formCmpt/baseComponent';
const confirm = Modal.confirm;
class TypeMng extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            },
            showAddPop:false,
            showDelPop:false,
            title:"",
            data:[{
                key: '1',
                name: '文档',
                age: 32,
                tags: ['nice', 'developer'],
                caozuotype:"上传"
              }, {
                key: '2',
                name: '文件夹',
                age: 42,
                tags: ['loser'],
                caozuotype:"下载"
              }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                tags: ['cool', 'teacher'],
                caozuotype:"删除"
              }]
        }
    }
    componentWillMount(){
      
    }
    changePage = (curpage) => {
        this.setState({
            defaultCurrent:curpage,
            tableParam:{
                model_name:"",
                currPage:curpage,
                pageSize:10
            }
        })
    }
    showPop=(type,title)=>{
        const _this = this;
        switch(type){
            case 'add':
                _this.setState({
                    showAddPop:true,
                    title:title
                });
                console.log(_this.state.showAddPop);
                debugger
            break;
            
            case 'del':
                this.setState({
                    showDelPop:true
                });
                this.delPop();
            break;
            default:;
        }
    }
    handleCancel=()=>{
        this.setState({
            showAddPop:false,
            showDelPop:false
        })
    }
    handleDel = () =>{

    }
    delPop =(props) => {
        const _this = this;
        confirm({
            title: '执行删除操作将会使该分类不再显示'+'\n'+'确定要继续执行该操作吗？',
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
            <div className="l-typeMng-content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>词条</Breadcrumb.Item>
                    <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <div className="l-form-box">
                        <SearchInput placeholder={"按类名搜索"} style={{float:"left"}} />
                        <div style={{margin:"0px 10px 10px 100px",display:"inline-block"}}>
                            <SingleSelection labelname={"按部门："} selStyle={{width:"69%"}} selectArr={[]} />
                        </div>
                        
                        <div className="l-grpBtn-box">
                            <Button style={{marginRight:"10px"}} onClick={()=>{this.showPop("add","新增分类")}} type="primary">新增分类</Button>
                            <Button type="primary" onClick={() =>{this.showPop("del")}}>删除</Button>
                        </div>
                    </div>
                    <DataTable tabletype="typeMng" data={this.state.data} showPop={this.showPop} delClick={this.delClick} rowSel={true} />
                </div>
                <AddType onChange={this.onChange} title={this.state.title} handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
                
          </div>
        )
    }
}

export default TypeMng;