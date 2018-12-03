import React,{Component} from 'react';
import { Breadcrumb,Button,Modal } from 'antd';
import {observer,inject} from 'mobx-react';
import styles from './user.css';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import SharePop from '../com_cmpts/popCmpt/sharePop';
import { SearchInput } from '../com_cmpts/formCmpt/baseComponent';

class Collect extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            },
            showModPop:false
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
    showModPop=()=>{
        this.setState({
            showModPop:true
        })
    }
    handleCancel=()=>{
        this.setState({
            showModPop:false
        })
    }
    render(){
        return (
            <div>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <div className="l-form-box">
                        <SearchInput placeholder={"按文件名搜索"} style={{float:"left"}} />
                        <div className="l-grpBtn-box">
                            <Button style={{marginRight:"10px"}} onClick={this.addLabelClick} type="primary">取消收藏</Button>
                            <Button type="primary" onClick={this.showModPop}>分享</Button>
                        </div>
                    </div>
                    <DataTable tabletype={this.props.tabletype} labelClick={this.labelDetailClick} rowSel={true} />
                </div>
                <Modal style={{height:"800px"}} width={1000} title={"添加分享用户"} visible={this.state.showModPop} onCancel={this.handleCancel} cancelText={"取消"} okText={"分享"}>
                    <SharePop />
                </Modal>
          </div>
        )
    }
}

export default Collect;