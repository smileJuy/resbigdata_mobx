import React,{Component} from 'react';
import { Breadcrumb ,Button} from 'antd';
import {observer,inject} from 'mobx-react';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import { SearchInput } from '../../components/com_cmpts/formCmpt/baseComponent';
import './label.css';

@inject("tableStore")
@observer
class AllLabels extends Component{
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
        // tableStore.fetchTableData("../../../public/tableData/label.json","");
        // tableStore.InitData();
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
    labelClick = () => {
        this.props.history.push(`./comLabel:modeId`);
    }
    addLabelClick = () =>{
        this.props.history.push(`./adMdLabel:modeId`);
    }
    render(){
        return (
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>词条</Breadcrumb.Item>
                <Breadcrumb.Item>全部词条</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div className="l-form-box">
                    <SearchInput placeholder={"按词条搜索"} style={{float:"left"}} />
                    <div style={{float:"right"}}>
                        <Button style={{margin:"0 30px"}} onClick={this.addLabelClick} type="primary">创建词条</Button>
                    </div>
                </div>
              <DataTable {...this.props} tabletype="allLabels" history={this.props.history} labelClick={this.labelClick} rowClick={true} />
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
})(observer(AllLabels))