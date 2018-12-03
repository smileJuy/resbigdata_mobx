import React,{Component} from 'react';
import {Modal,Icon,Input} from 'antd';
import {InputCnt} from '../formCmpt/baseComponent';
import {MenuTree} from '../treeCmpt/menuTree';

const { TextArea } = Input; 
// 退回弹窗
function Back(props){
    return (
        <Modal style={{height:"500px"}} width={500} visible={props.showBack} onOk={props.handleBack} onCancel={props.handleCancel} cancelText={"取消"} okText={"确定"}>
            <h3><Icon type="exclamation-circle" />请输入退回原因</h3>
            <TextArea onChange={props.onChange} height="200px" rows={4} />
        </Modal>
    )
}
// 添加弹窗
function AddType(props){
    debugger
    return (
        <Modal style={{height:"500px"}} width={500} visible={props.showAddPop} title={props.title} onOk={props.handleAdd} onCancel={props.handleCancel} cancelText={"取消"} okText={"确定"}>
            <div  className="l-pop-input">
                <InputCnt labelname={"分类名称："} defaultValue={"张三"} placeholder={"请输入分类名称"}/>
            </div>
        </Modal>
    )
}
// 收藏弹窗
function CollectPop(props){
    return (
        <Modal style={{height:"500px"}} width={500} visible={props.showTreePop} title={props.title} onOk={props.handleTreeOk} onCancel={props.handleCancel} cancelText={"取消"} okText={"确定"}>
            <div className='l-pop-treestyle'>
                <MenuTree treenodeData={props.treeData}/>
            </div>
        </Modal>
    )
}
// 分享弹窗
function ShareAll(props){
    return (
        <Modal style={{height:"500px"}} width={500} visible={props.showTreePop} title={props.title} onOk={props.handleTreeOk} onCancel={props.handleCancel} cancelText={"取消"} okText={"确定"}>
            <div className='l-pop-treestyle'>
                <MenuTree treenodeData={props.treeData}/>
            </div>
        </Modal>
    )
}

export {Back,AddType,CollectPop,ShareAll};