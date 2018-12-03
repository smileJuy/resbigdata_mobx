import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import "antd/dist/antd.css";
import './index.css';
import {observer,inject} from 'mobx-react'
import EditableTable from '../components/com_cmpts/tableCmpt/editTable';
@inject("tableStore")
@observer
class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            }
        }
    }
    componentWillMount(){
        const { tableStore } = this.props;
        // store.fetchTodos();
        // tableStore.fetchTableData("http://172.18.200.121/EDUSYPT/api/rest/web/resource/mgr/resource/queryapply",this.state.tableParam);
        tableStore.InitData();
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
    render(){
        const { tableStore } = this.props;
        let tableData = tableStore.tabledata.toJS();
        let tableTitle = tableStore.column.toJS();
        let loading = tableStore.loading;
        console.log("tableData",tableData,tableStore.tabledata);
        debugger
        return (
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>dfd</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <EditableTable changePage={this.changePage} loading={loading} defaultCurrent={this.state.defaultCurrent} tableData={tableData} column={tableTitle} />
            </div>
          </div>
        )
    }
}

export default inject(stores=>{
    const tableStore= stores.rootStore.tableStore
    return {
        tableStore
    }
})(observer(IndexPage))