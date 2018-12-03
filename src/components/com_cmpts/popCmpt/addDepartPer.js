import React,{Component} from 'react';
import {DataTable} from '../tableCmpt/tables';
import {SingleSelection, InputCnt} from '../formCmpt/baseComponent';
import { Button } from 'antd';
import './pop.css';

const selectArr=["产品中心","研发中心","项目中心"]

class AddDepartPer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="y-sharepop-container">
                <div className="y-sharepop-operation"> 
                    <SingleSelection labelname={"选择部门："} selStyle={{width:"69%"}} selectArr={selectArr} />
                </div>
                <DataTable tabletype="setProjectDirector" rowSel={true}/>
            </div>
        )
    }
}

export default AddDepartPer;