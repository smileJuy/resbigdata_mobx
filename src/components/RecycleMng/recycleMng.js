import React,{Component} from 'react';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import { Modal } from 'antd';

const confirm = Modal.confirm;

class RecycleMng extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDelPop:false,
            showBackPop:false
        }
    }
    handleCancel=()=>{
        this.setState({
            showDelPop:false,
            showBackPop:false
        })
    }
    handleDel=()=>{
        this.setState({
            showDelPop:false,
            showBackPop:false
        })
    }
    showPop=(type)=>{
        switch(type){
            case 'del':
                this.setState({
                    showDelPop:true
                });
                this.delPop();
            break;
            case 'back':
                this.setState({
                    showBackPop:true
                });
                this.backPop();
            break;
            default:;
        }
        
    }

    delPop =(props) => {
        const _this = this;
        confirm({
            title: '执行删除操作将会彻底删除文件或文件夹从而不可恢复，确定要继续执行该操作吗？',
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
    backPop =(props) => {
        const _this = this;
        confirm({
            title: '执行恢复操作将会恢复文件或文件夹到原有目录，确定要继续执行该操作吗？',
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
        return(
            <div>
                <SearchInput placeholder={"按文件搜索"} style={{margin:"10px 0"}}/>
                <DataTable rowSel={true} tabletype="recycleMng" showPop={this.showPop} />
            </div>
        )
    }
}

export default RecycleMng;