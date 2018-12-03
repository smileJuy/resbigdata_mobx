import React,{Component} from 'react';
import {DataTable} from '../com_cmpts/tableCmpt/tables';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';

class LogMng extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <SearchInput style={{margin:"10px 0"}}/>
                <DataTable tabletype="log" />
            </div>
        )
    }
}

export default LogMng;