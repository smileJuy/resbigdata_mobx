import {Input,Button} from 'antd'
import React from 'react'
import {observer,inject} from 'mobx-react';
import { Breadcrumb,Tabs } from 'antd';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import PubStore from '../../components/docMng/pubStore';

const TabPane = Tabs.TabPane;

 class Public extends React.Component{
    constructor(){
        super();
       this.state={
        userInfo:{}
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
    login=()=>{
        this.props.history.push('index')
    }
    callback = (key) => {
        console.log(key);
      }
    render(){
        const operations = <SearchInput />;
        return (
            <div style={{float:'left',width:'100%',margin:'0px auto'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>文件</Breadcrumb.Item>
                    <Breadcrumb.Item>私有库</Breadcrumb.Item>
                </Breadcrumb>
                <PubStore pagetype="pri" {...this.props} />
            </div>
        )
    }
}

export default Public;