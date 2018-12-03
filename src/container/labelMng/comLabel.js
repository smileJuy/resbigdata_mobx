import React,{Component} from 'react';
import { Breadcrumb,Button,Modal } from 'antd';
import {observer,inject} from 'mobx-react';
import styles from './label.css';
import {DataTable} from '../../components/com_cmpts/tableCmpt/tables';
import SharePop from '../../components/com_cmpts/popCmpt/sharePop';
import { SearchInput ,SingleSelection } from '../../components/com_cmpts/formCmpt/baseComponent';
import { AddType, CollectPop } from '../../components/com_cmpts/popCmpt/pop';
const treeData = [{
    title: '0-0',
    key: '0-0',
    children: [{
      title: '0-0-0',
      key: '0-0-0',
      children: [
        { title: '0-0-0-0', key: '0-0-0-0' },
      ],
    }, {
      title: '0-0-1',
      key: '0-0-1',
      children: [
        { title: '0-0-1-0', key: '0-0-1-0' },
      ],
    }, {
      title: '0-0-2',
      key: '0-0-2',
    }],
  }, {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
    ],
  }, {
    title: '0-2',
    key: '0-2',
  }];
class ComLabels extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultCurrent:1,
            tableParam:{
                model_name:"",
                currPage:1,
                pageSize:10
            },
            showModPop:false,
            showAddPop:false,
            showTreePop:false
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
    labelDetailClick = () => {
        this.props.history.push(`./labelDetail:modeId`);
    }
    addLabelClick = () =>{
        this.props.history.push(`./adMdLabel:modeId`);
    }
    showModPop=()=>{
        this.setState({
            showModPop:true
        })
    }
    handleCancel=()=>{
        this.setState({
            showModPop:false,
            showTreePop:false
        })
    }
    showPop=(type)=>{
        switch(type){
            case 'add':
                this.setState({
                    showAddPop:true
                });
            break;
            case 'del':
                this.setState({
                    showDelPop:true
                });
                this.delPop();
            break;
            case 'collect':
                this.setState({
                    showTreePop:true
                });
            break;
            
            default:;
        }
        
    }
    render(){
        return (
            <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>全部词条</Breadcrumb.Item>
              <Breadcrumb.Item>同名词条</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div className="l-form-box">
                    <SearchInput placeholder={"按标签搜索"} style={{float:"left"}} />
                    <div style={{margin:"0px 10px 10px 100px",display:"inline-block"}}>
                            <SingleSelection labelname={"按分类："} selStyle={{width:"69%"}} selectArr={[]} />
                        </div>
                    <div className="l-grpBtn-box" >
                        <Button type="primary" onClick={this.showModPop}>分享</Button>
                    </div>
                </div>
                <DataTable tabletype="comLabel" labelClick={this.labelDetailClick} showPop={this.showPop} rowClick={true} rowSel={true} />
            </div>
            <Modal style={{height:"800px"}} width={1000} title={"添加分享用户"} visible={this.state.showModPop} onCancel={this.handleCancel} cancelText={"取消"} okText={"分享"}>
                <SharePop />
            </Modal>
            <AddType onChange={this.onChange}  handleAdd={this.handleAdd} handleCancel={this.handleCancel} showAddPop={this.state.showAddPop}  />
            <CollectPop treeData={treeData} onChange={this.onChange} title="收藏至" labelName="收藏至" handleTreeOk={this.handleTreeOk} handleCancel={this.handleCancel} showTreePop={this.state.showTreePop} />
          </div>
        )
    }
}

export default ComLabels;