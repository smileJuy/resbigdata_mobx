import React,{Component} from 'react';
import { Button, Icon ,Modal} from 'antd';
import styles from './pubStore.css';
import {UploadFile} from '../com_cmpts/formCmpt/baseComponent';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import SharePop from '../com_cmpts/popCmpt/sharePop';
import { SearchInput } from '../com_cmpts/formCmpt/baseComponent';
import { AddType, CollectPop } from '../com_cmpts/popCmpt/pop';
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
class DocGrp extends Component{
    constructor(){
        super();
        this.state={
            showSharePop:false,
            showAddPop:false,
            showTreePop:false,
            title:""
        }
    }

    showSharePop=()=>{
        
    }
    showPop = (e,type,title) =>{
        e.stopPropagation();
        switch(type){
            case 'add':
                this.setState({
                    showAddPop:true,
                    title:title
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
    render(){
        return (
            <div className='l-pub-btngrp'>
                <div className='l-pub-btn'>
                    <SearchInput placeholder={"按文件名搜索"} style={{float:"left"}}/>
                    <Button type="primary" onClick={(e) => {this.showPop(e,"del")}}>导出</Button>
                    <Button type="primary" onClick={(e) => {this.showPop(e,"collect")}}>共享</Button>
                    <Button type="primary" onClick={(e) => {this.showPop(e,"add","创建文档")}}>
                        <Icon type="add"/>
                        创建文档    
                    </Button>
                    
                </div>
                <DataTable tabletype="docGrp" showPop={this.showPop} tablestyle="public" rowClick={true} rowSel={true} labelClick={this.labelClick} />
                <AddType onChange={this.onChange} title={this.state.title} handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
                <CollectPop treeData={treeData} onChange={this.onChange} title="共享至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
            </div>
        )
    }
}

export default DocGrp;