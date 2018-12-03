import {Input,Button} from 'antd'
import React from 'react'
import {observer,inject} from 'mobx-react'
 class Test2 extends React.Component{
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
    render(){
        return (
            <div style={{width:'300px',margin:'0px auto'}}>
               jyyyyyyyyyyyy
            </div>
        )
    }
}

export default Test2;