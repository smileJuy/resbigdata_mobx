import {Input,Button} from 'antd'
import React from 'react'
import {observer,inject} from 'mobx-react';
import { Tabs } from 'antd';
import { SearchInput } from '../components/com_cmpts/formCmpt/baseComponent';
import PubStore from '../components/docMng/pubStore';

const TabPane = Tabs.TabPane;

 class Test extends React.Component{
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
                <Tabs tabBarExtraContent={operations} defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="共有库" key="1">
                        <PubStore />
                    </TabPane>
                    <TabPane tab="私有库" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Test;