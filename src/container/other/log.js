import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import LogMng from '../../components/LogMng/logMng';

class Log extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>日志</Breadcrumb.Item>
                </Breadcrumb>
                <LogMng />
            </div>
        )
    }
}

export default Log;