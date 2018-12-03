
import React from 'react'
import {observer,inject} from 'mobx-react';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import { Breadcrumb, Button, Modal } from 'antd';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import ResetGrantPop from '../../components/com_cmpts/popCmpt/resetGrantPop';
 class ResetGrant extends React.Component{
    constructor(){
        super();
       this.state={
        userInfo:{},
        showResetPop:false
       };
    }
    change=(e,type)=>{
        let userInfo = this.state.userInfo;
        userInfo[type] = e.target.value;
        this.setState({
            userInfo:userInfo
        })
        this.props.userStore.setUserInfo(userInfo);
    }
    showPop = () =>{
        this.setState({
            showResetPop:true
        })
    }
    handleCancel = () =>{
        this.setState({
            showResetPop:false
        })  
    }
    login=()=>{
        this.props.history.push('index')
    }
    callback = (key) => {
        console.log(key);
      }
    render(){
        return (
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>设置</Breadcrumb.Item>
              <Breadcrumb.Item>权限设置</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div style={{ height:"40px" }}>
                    <SearchInput style={{float:"left"}} />
                    {/* <Button style={{float:"right"}} type="primary" onClick={()=>{this.showPop()}}>权限设置</Button> */}
                </div>
                <DataTable rowSel={true} tabletype={"setDirDirector"} />
            </div>
            <Modal style={{height:"800px"}} width={880} title={"设置文件操作权限"} visible={this.state.showResetPop} onCancel={this.handleCancel} cancelText={"取消"} okText={"确定"}>
                <ResetGrantPop />
            </Modal>
            
          </div>
        )
    }
}


export default ResetGrant;