import React,{Component} from 'react';
import { Breadcrumb, Button, Form } from 'antd';
import styles from './label.css';
import {MoreSelValid,FromLine} from '../../components/com_cmpts/formCmpt/baseComponent';
import LabelTree from '../../components/com_cmpts/treeCmpt/labelTree';
import EditorDemo from '../../components/com_cmpts/formCmpt/editText';

class AdMdLabelForm extends Component{
    constructor(){
        super();
        this.state={
            labelData:[{
                labelname:''
            }],
            activeIndex:0,
            popType:"add",
            labelCon:"",
            labelArr:[]
        }
    }
    // 获取输入框的值
    getEditCtn = (labelCon) =>{
        this.setState({
            labelCon:labelCon
        })
    }
    // 表单提交
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          let labelnames = [];
          this.state.labelData.map(item=>{return labelnames.push(item.labelname)});
          let labelCon = this.state.labelCon;
          console.log("1111111111111111:",labelCon,values,labelnames);
          if (!err) {
              let labelCon = this.state.labelCon;
            // this.props.getFromData(values);
          }
        });
        setInterval(this.tipHide,2000);
      };
    //   下拉框
      selChange = (type,value)=> {
        console.log(type,value)
          var selectdata = this.state.selectdata;
          selectdata[type] = value;
          console.log("1", selectdata);
          this.setState({
              selectdata:selectdata
          });
          console.log(this.state.selectdata);
      }
    //   左侧树
    clickMenu = (item, key, selectedKeys) =>{
            console.log(item, key, selectedKeys);
            this.setState({
              activeIndex:Number(item.key)
            })
            if(this.props.popType === "add"){
              let treeName =this.state.labelData[Number(item.key)].labelname;
              if(treeName){
                this.props.getTreeNode(treeName,Number(item.key));
              }
            }else if(this.props.popType === "modify"){
              let treeName =this.state.labelData[Number(item.key)].labelname;
              if(treeName){
                this.props.getTreeNode(treeName,Number(item.key));
              }
            } 
           
          }
        //渲染输入框的样式
        inputStyle = (index) => {
          let inputS = {"width":"60%","border":this.state.activeIndex === index ? "1px solid #d9d9d9" : "none", "backgroundColor":this.state.activeIndex === index ? "#fff" : ""};
          return inputS;
        }
        addMenuClick = () =>{
                let treenode = {
                  labelname: ""
                };
                 this.state.labelData.push(treenode);
                 this.setState({
                    labelData:this.state.labelData
                 })
                // this.props.delTreeData(this.state.treeData,this.state.treeData.length-1)
               
              }
    handleTextareaChange = (e,index,name) =>{
        let inputValue=e.target.value;
        let idx = index ? index : (this.state.activeIndex);
        this.state.labelData[idx][name] = inputValue;
        this.setState({
            labelData:  this.state.labelData
        })
    }
    handleInput = (e,index) =>{
        let inputValue=e.target.value;
        this.state.labelArr.push(inputValue);
        let idx = index ? index : (this.state.activeIndex);
        
    }
    cancleClick=()=>{
        this.props.history.push('./allLabels');
    }
    // 树节点的删除
      delNode = (e,idx) =>{
        e.stopPropagation();
        let nodes = this.state.labelData.filter((element,index)=>{ return index!==idx});
        let activeidx;
        
        if(idx >= (this.state.labelData.length-1)){
            activeidx = idx - 1;
            this.state.currindex = idx - 1;
        }else{
            activeidx = idx;
        }
        this.setState({
            currindex:activeidx,
            activeIndex:activeidx
        })
        this.setState({
            labelData:nodes
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>词条</Breadcrumb.Item>
                    <Breadcrumb.Item>创建词条</Breadcrumb.Item>
                </Breadcrumb>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="l-addMdlabel-content">
                        <div className="l-addMdlabel-lefttree">
                        <MoreSelValid style={{width:"100%"}} getFieldDecorator={getFieldDecorator} selChange={this.selChange} label="词条分类：" seltype="wordItem" mode="" placeholder="请选择词条类型" messageInfo="请选择词条类型" type="" require={true} />
                        <label className="l-fome-label"><span>*</span>词条标签：</label>
                        <LabelTree delNode={this.delNode} handleInput={this.handleInput} popType={this.state.popType} activeIndex={this.state.activeIndex} handleTextareaChange={this.handleTextareaChange} addMenuClick={this.addMenuClick} inputStyle={this.inputStyle} clickMenu={this.clickMenu} labelData={this.state.labelData} />
                        </div>
                        <div className="l-addMdlabel-rightEditor">
                            <FromLine getFieldDecorator={getFieldDecorator} style={{width:"100%"}} label="词条标题：" placeholder="请输入词条标题" type="wordName"  typeInfo="text" initialValue={""} />
                            <FromLine getFieldDecorator={getFieldDecorator} style={{width:"100%"}} label="摘要：" placeholder="请输入词条摘要" type="summary" typeInfo="text" initialValue={""} />
                            <EditorDemo getEditCtn={this.getEditCtn} labelCon={this.state.labelCon} />
                            <div className="l-addMdlabel-btn">
                                <Button type="primary" style={{marginRight:"10px"}} onClick={(e)=>{this.handleSubmit(e)}}>保存并下一个</Button>
                                <Button type="primary" style={{marginRight:"10px"}}>保存并退出</Button>
                                <Button type="primary" onClick={this.cancleClick}>取消</Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}
const AdMdLabel = Form.create()(AdMdLabelForm);
export default AdMdLabel;