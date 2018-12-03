import {Input,Button} from 'antd'
import React from 'react'
import {observer,inject} from 'mobx-react'
 class NoMatch extends React.Component{
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
            <div style={{margin:'0px auto'}}>
                <div className="exception-content">
                    <img
                    src={require('./img/structor.png')}
                    className="imgException"
                    alt="empty"
                    />
                    <div>
                        <h3 className="title">
                            页面暂无内容
                        </h3>
                        <p className="description">
                            抱歉，页面暂无内容，请看看其他页面
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoMatch;