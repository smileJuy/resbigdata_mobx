import React,{Component} from 'react';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import {Button,Modal} from 'antd';
import {MenuCmpt} from '../com_cmpts/siderMenu/menu';
import './reset.css';
const treeData = [{
            treename: '研发中心',
            key: '0-0',
            treeicon:'file'
        }, {
            treename: '产品中心',
            key: '0-1',
            treeicon:'file'
        
        }, {
            treename: '项目中心',
            key: '0-2',
            treeicon:'file'
        }];
class DepartmentPer extends Component{
    constructor(){
        super();
        
    }
    render(){
        return (
            <div>
                <div className='l-reset-content'>
                    <div className='l-reset-leftTree'>
                        <h3 className='l-content-h3'>{this.props.tabtype}选择</h3>
                        <MenuCmpt treeData={treeData} />
                    </div>
                    <div className='l-reset-centertable'>
                        <Button type="primary" style={{marginBottom:"10px"}}>设为负责人</Button>
                        <DataTable rowSel={true} tabletype={this.props.tabletype} />
                    </div>
                    <div className='l-reset-righttable'>
                        <h3 className='l-content-h3'>已设置负责人</h3>
                        <DataTable tabletype="delReset" />
                    </div>
                </div>
            </div>
        )
    }
}
export default DepartmentPer;