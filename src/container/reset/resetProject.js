import React,{Component} from 'react';
import { Tabs } from 'antd';
import LabelProtect from '../../components/reset/labelProtect'
const TabPane = Tabs.TabPane;
export default class ResetProject extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="目录维护者指定" key="1">
                        <LabelProtect tabtype="目录" tree={true} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
    componentWillReact(){
        console.log();
    }
    componentWillMount(){

    }
}
