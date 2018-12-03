import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import { Tabs, Breadcrumb } from 'antd';
import Collect from '../../components/userCenter/collect';

const TabPane = Tabs.TabPane;

@inject("appStore")
@observer
class MyCollection extends Component{
    @observable secondsPassed = 0;
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        console.log(this.props);
        console.log(this.props.appStore.amount);
        return (
            <div>
                {/* <p>{this.props.appStore.total}</p>
                <p>{this.secondsPassed}</p>
                <button onClick={this.onReset.bind(this)}>按钮</button>
                <AddRowTable /> */}
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                    <Breadcrumb.Item>我的收藏</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{float:'left',width:'100%',margin:'0px auto'}}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="收藏文件" key="1">
                            <Collect tabletype={"myCollectionFile"}/>
                        </TabPane>
                        <TabPane tab="收藏词条" key="2">
                            <Collect tabletype={"myCollectionLabel"}/>
                        </TabPane>
                    </Tabs>
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
})(observer(MyCollection))
