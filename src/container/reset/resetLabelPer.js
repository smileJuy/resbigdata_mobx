import React,{Component} from 'react';
import { Tabs } from 'antd';
import LabelProtect from '../../components/reset/labelProtect'
const TabPane = Tabs.TabPane;
export default class ResetLabelPer extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="词条维护者指定" key="1">
                        <LabelProtect role="depart" tabtype="词条" tree={false} />
                    </TabPane>
                    <TabPane tab="目录维护者指定" key="2">
                        <LabelProtect role="depart" tabtype="目录" tree={false} />
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
