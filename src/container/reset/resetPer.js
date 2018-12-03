import React,{Component} from 'react';
import { Tabs } from 'antd';
import DepartmentPer from '../../components/reset/departmentPer'
const TabPane = Tabs.TabPane;
export default class ResetPer extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="部门负责人指定" key="1">
                        <DepartmentPer tabletype={"setDepartDirector"} tabtype="部门" />
                    </TabPane> 
                    <TabPane tab="项目负责人指定" key="2">
                        <DepartmentPer tabletype={"setProjectDirector"} tabtype="项目" />
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
