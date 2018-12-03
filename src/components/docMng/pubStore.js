import React,{Component} from 'react';
import { Button, Icon ,Modal} from 'antd';
import styles from './pubStore.css';
import {UploadFile} from '../com_cmpts/formCmpt/baseComponent';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import SharePop from '../com_cmpts/popCmpt/sharePop';
import { SearchInput } from '../com_cmpts/formCmpt/baseComponent';
import { AddType, CollectPop,ShareAll } from '../com_cmpts/popCmpt/pop';
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
const confirm = Modal.confirm;
class PubStore extends Component{
    constructor(){
        super();
        this.state={
            showSharePop:false,
            showAddPop:false,
            showTreePop:false,
            title:"",
            shareAll:false
        }
    }

    showSharePop=()=>{
        
    }
    showPop = (type,title) =>{
        switch(type){
            case 'add':
                this.setState({
                    showAddPop:true,
                    title:title
                });
            break;
            case 'share':
                this.setState({
                    showSharePop:true
                });
            break; 
            case 'del':
               this.delPop();
            break;
            case 'collect':
                this.setState({
                    showTreePop:true
                });
            break;
            case 'shareall':
                this.setState({
                    showTreePop:true
                });
            break;
            default:;
        }
    }
    handleCancel=()=>{
        this.setState({
            showSharePop:false,
            showAddPop:false,
            showTreePop:false
        })
    }
    componentWillUnmount = () =>{

    }
    handleAdd = () =>{
    
    }
    labelClick=(record)=>{
        if(record.age === 32){
            this.props.history.push(`./preview:modelId`)
        }else{
            this.props.history.push(`./private`)
        }
        
    }
    // 
    delPop =(props) => {
        const _this = this;
        confirm({
            title: '确认要把所选文件或文件夹放入回收站吗？'+'\n'+'删除的文件可在XX天内通过回收站还原',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                _this.handleDel();
            },
            onCancel() {
                _this.handleCancel();
            },
          });
    }
    renderTable = (type) => {
        let container = "";
        if(type === "pub"){
            container = 
            <div className='l-pub-btngrp'>
                <div className='l-pub-btn'>
                    <SearchInput placeholder={"按文件名搜索"} style={{float:"left"}}/>
                    <Button type="primary" onClick={() => {this.showPop("add","新增目录")}}>
                        <Icon type="add"/>
                        新增目录    
                    </Button>
                    <Button type="primary" onClick={() => {this.showPop("share")}}>分享</Button>
                    <Button type="primary" onClick={() => {this.showPop("del")}}>删除</Button>
                    <Button type="primary">下载</Button>
                    <UploadFile type="primary" showList={false} uploadName="上传" />
                </div>
                <DataTable tabletype={"pub"} showPop={this.showPop} tablestyle="public" rowClick={true} rowSel={true} labelClick={this.labelClick} />
                <Modal style={{height:"800px"}} width={1000} title={"添加分享用户"} visible={this.state.showSharePop} onCancel={this.handleCancel} cancelText={"取消"} okText={"分享"}>
                    <SharePop />
                </Modal>
                <AddType onChange={this.onChange} title={this.state.title} handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
                <CollectPop treeData={treeData} onChange={this.onChange} title="收藏至" labelName="收藏至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
            </div>
        }else if(type === "pri"){
            container = 
            <div className='l-pub-btngrp'>
                <div className='l-pub-btn'>
                    <SearchInput placeholder={"按文件名搜索"} style={{float:"left"}}/>
                    <Button type="primary" onClick={() => {this.showPop("add","新增目录")}}>
                        <Icon type="add"/>
                        新增目录    
                    </Button>
                    <Button type="primary" onClick={() => {this.showPop("share")}}>分享</Button>
                    <Button type="primary" onClick={() => {this.showPop("shareall")}}>共享</Button>
                    <Button type="primary" onClick={() => {this.showPop("del")}}>删除</Button>
                    <Button type="primary">下载</Button>
                    <UploadFile type="primary" showList={false} uploadName="上传" />
                </div>
                <DataTable tabletype={"pri"} showPop={this.showPop} tablestyle="public" rowClick={true} rowSel={true} labelClick={this.labelClick} />
                <Modal style={{height:"800px"}} width={1000} title={"添加分享用户"} visible={this.state.showSharePop} onCancel={this.handleCancel} cancelText={"取消"} okText={"分享"}>
                    <SharePop />
                </Modal>
                <AddType onChange={this.onChange} title={this.state.title} handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
                <CollectPop treeData={treeData} onChange={this.onChange} title="收藏至" labelName="收藏至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
                <ShareAll treeData={treeData} onChange={this.onChange} title="共享至" labelName="共享至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
            </div>
        }
        return container;
    }
    render(){
        return (
            this.renderTable(this.props.pagetype)
        )
    }
}

export default PubStore;