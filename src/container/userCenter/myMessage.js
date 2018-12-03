import React,{Component} from 'react';
import { Breadcrumb, Modal } from 'antd';
import {observer,inject} from 'mobx-react'
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import { CollectPop } from '../../components/com_cmpts/popCmpt/pop';
const treeData = [{
    title: '0-0',
    key: '0-0',
    children: [{
      title: '0-0-0',
      key: '0-0-0',
      children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
      ],
    }, {
      title: '0-0-1',
      key: '0-0-1',
      children: [
        { title: '0-0-1-0', key: '0-0-1-0' },
      ],
    }, {
      title: '0-0-2',
      key: '0-0-2',
    }],
  }, {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
    ],
  }, {
    title: '0-2',
    key: '0-2',
  }];
class MyMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            showTreePop:false,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            }
        }
    }
    componentWillMount(){
      
    }
    showPop = (type) => {
        if(type === "collect"){
            this.setState({
                showTreePop:true
            })
        }
    }
    handleCancel = () =>{
        this.setState({
            showTreePop:false
        })
    }
    changePage = (curpage) => {
        this.setState({
            defaultCurrent:curpage,
            tableParam:{
                model_name:"",
                currPage:curpage,
                pageSize:10
            }
        })
    }
    labelClick = (record) => {
        if(record.age === 32){
            this.props.history.push(`./labelDetail:modeId`);
        }else{
            this.lookTip();
        }
        
    }

    lookTip = () =>{
        const _this = this;
        Modal.warning({
            title: (
                <div>
                    当前文件暂不支持预览请<br />
                    点击<a onClick={this.dowbload}>下载</a>进行查看
                </div>
            ),
            okText:"确定",
            onOk() {},
          });
    }
    dowbload = () =>{

    }
    render(){
        return (
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                <Breadcrumb.Item>我的消息</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <SearchInput />
              <DataTable {...this.props} showPop={this.showPop} history={this.props.history} tabletype="myMessage" labelClick={this.labelClick} rowClick={true} />
            </div>
            <CollectPop treeData={treeData} onChange={this.onChange} title="收藏至" labelName="收藏至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
          </div>
        )
    }
}

export default MyMessage;