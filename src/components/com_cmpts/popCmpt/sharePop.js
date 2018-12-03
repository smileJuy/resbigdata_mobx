import React,{Component} from 'react';
import {DataTable} from '../tableCmpt/tables';
import {SingleSelection, InputCnt} from '../formCmpt/baseComponent';
import { Button } from 'antd';
import '../../reset/reset.css';
import styles from './pop.css';

const selectArr=["产品中心","研发中心","项目中心"]

class SharePop extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="y-sharepop-container">
                <p style={{margin:"10px 10px"}}>分享词条：<span>XXXX</span></p>
                <div className="y-sharepop-operation"> 
                    <SingleSelection labelname={"选择部门："} selStyle={{width:"69%"}} selectArr={selectArr} />
                    <InputCnt labelname={"查找用户："} defaultValue={"张三"} placeholder={"请输入要查找的用户"}/>
                    <Button type="primary">查询</Button>
                </div>
                {/* <DataTable rowSel={true}/> */}
                <div className='l-reset-content'>
                    <div className='l-reset-centertable'>
                        <Button type="primary" style={{marginBottom:"10px"}}>添加分享用户</Button>
                        <DataTable rowSel={true} tabletype="setProjectDirector"/>
                    </div>
                    <div className='l-reset-righttable'>
                        <h3 className='l-content-h3'>已分享用户</h3>
                        <DataTable tabletype="delReset" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SharePop;