import React,{Component} from 'react';
import {DataTable} from '../tableCmpt/tables';
import {Button,Modal} from 'antd';
import '../../reset/reset.css';
class ResetGrantPop extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        return (
                <div className='l-reset-content'>
                    <div className='l-reset-centertable'>
                        <Button type="primary" style={{marginBottom:"10px"}}>添加文件操作权限</Button>
                        <DataTable rowSel={true} tabletype="setProjectDirector" />
                    </div>
                    <div className='l-reset-righttable'>
                        <h3 className='l-content-h3'>已设置权限员工</h3>
                        <DataTable tabletype="delReset" />
                    </div>
                </div>
        )
    }
}
export default ResetGrantPop;