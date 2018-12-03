import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {AddType} from '../../components/com_cmpts/popCmpt/pop';
import { Tabs, Breadcrumb, Button, Modal } from 'antd';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import {SingleSelection} from '../../components/com_cmpts/formCmpt/baseComponent';
import SharePop from '../../components/com_cmpts/popCmpt/sharePop';
import './usercenter.css'
const confirm = Modal.confirm;
const TabPane = Tabs.TabPane;
const selectArr=["产品中心","研发中心","项目中心"];
@inject("appStore")
@observer
class MyShare extends Component{
    @observable secondsPassed = 0;
    constructor(props){
        super(props);
        this.state = {
            showSharePop:false,
            showShaCancel:false,
            showAddPop:false
        };
    }
    showPop = (type,title) =>{
        switch(type){
            case 'share':
                this.setState({
                    showSharePop:true
                });
            break;
            case 'shareCancel':
                this.setState({
                    showShaCancel:true
                });
                this.CancelSharePop();
            break;
            case 'add':
                this.setState({
                    showAddPop:true,
                    title:title
                });
            break;
            default:;
        }
    }
    // 分解词条
    openLabel = () =>{
        this.props.history.push(`./openLabel:modeId`);
    }
    handleCancel=()=>{
        this.setState({
            showAddPop:false,
            showDelPop:false,
            showSharePop:false,
            showShaCancel:false
        })
    }
    // 取消共享
    CancelSharePop =(props) => {
        const _this = this;
        confirm({
            title: '执行取消共享操作将会在公有库中移除该文件'+'\n'+'确定要继续执行该操作吗？',
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
        console.log(this.props);
        console.log(this.props.appStore.amount);
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                    <Breadcrumb.Item>我的共享</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{float:'left',width:'100%',margin:'0px auto',background:'#fff'}}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="共享文件" key="1">
                            <div className="l-form-box">
                                <SearchInput style={{float:"left"}}/>
                                <div style={{float:'right'}}>
                                    <Button style={{marginRight:"10px"}} type="primary" onClick={this.CancelSharePop}>取消共享</Button>
                                    <Button style={{marginRight:"10px"}} onClick={()=>{this.showPop("share")}} type="primary">分享</Button>
                                </div>
                            </div>
                            <DataTable openLabel={this.openLabel} tabletype="fileShare" rowSel={true} />
                            <Modal style={{height:"800px"}} width={1000} title={"添加分享用户"} visible={this.state.showSharePop} onCancel={this.handleCancel} cancelText={"取消"} okText={"分享"}>
                                <SharePop />
                            </Modal>
                        </TabPane>
                        <TabPane tab="共享词条" key="2">
                            <div className="l-form-box">
                                <SingleSelection labelname={"状态："} selStyle={{width:"69%"}} selectArr={selectArr} />
                                <div className="l-grpBtn-box">
                                    <Button type="primary" onClick={()=>{this.showPop("share")}}>分享</Button>
                                </div>
                            </div>
                            <DataTable del={this.delPop} showPop={this.showPop} openLabel={this.openLabel} tabletype="labelShare" rowSel={true} />
                        </TabPane>
                    </Tabs>
                    <AddType onChange={this.onChange} title={this.state.title} handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
                </div>
            </div>
        )
    }
    componentWillReact(){
        console.log();
    }
    componentWillMount(){

    }
    onReset(){
        this.props.appStore.resize();
    }
}


export default inject(stores=>{
    const appStore= stores.rootStore.appStore
    return {
        appStore
    }
})(observer(MyShare))
