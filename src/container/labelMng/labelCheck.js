import React,{Component} from 'react';
import { Breadcrumb,Button,Modal } from 'antd';
import {observer,inject} from 'mobx-react';
import styles from './label.css';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import {Back} from '../../components/com_cmpts/popCmpt/pop';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';

const confirm = Modal.confirm;

class LabelCheck extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            },
            showBack:false,
            backRes:""
        }
    }
    componentWillMount(){
      
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
    showBack=()=>{
        this.setState({
            showBack:true
        })
    }
    handleCancel=()=>{
        this.setState({
            showBack:false
        })
    }
    onChange = (e) =>{
        this.setState({
            backRes:e.target.value
        })
        
    }
    handleBack = () =>{
        console.log(this.state.backRes);
        debugger
    }
    handleDel=()=>{

    }
    passPop =(props) => {
        const _this = this;
        confirm({
            title: '是否通过审核？',
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
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>词条</Breadcrumb.Item>
                <Breadcrumb.Item>词条审核</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div className="l-form-box">
                    <SearchInput style={{float:"left"}} />
                </div>
                <DataTable tabletype="labelCheck" passPop={this.passPop} showBack={this.showBack} />
            </div>
            <Back onChange={this.onChange} handleBack={this.handleBack} handleCancel={this.handleCancel} showBack={this.state.showBack} />
          </div>
        )
    }
}

export default LabelCheck;