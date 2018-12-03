import React,{Component} from 'react';
import { Breadcrumb, Button, Form, message } from 'antd';
import './usercenter.css';
import {MoreSelValid,FromLine,InputCnt} from '../../components/com_cmpts/formCmpt/baseComponent';
import EditorDemo from '../../components/com_cmpts/formCmpt/editText';

class OpenLabelForm extends Component{
    constructor(){
        super();
        this.state={
            labelData:[{
                labelname:''
            }],
            activeIndex:0,
            popType:"add",
            labelCon:"",
            labelArr:[],
            addlabelArr:[],
            labeldel:false,
            defaultLabel:''
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
    // 回车
    pressEnter = (e) =>{
        let addlabelArr = this.state.addlabelArr;
        
            if(addlabelArr.length > 4){
                message.warn("新增标签最多五个！");
            }else{
                if(e.target.value){
                    addlabelArr.push(e.target.value);
                    this.setState({addlabelArr:addlabelArr});
                }
            }
           
    }
    onMouseOut = () =>{
        
        
            this.setState({
                labeldel:false
            });
        
        
    }
    onMouseOver = (idx) =>{
        debugger
        let addlabelArr = this.state.addlabelArr;
        addlabelArr && addlabelArr.map((item,index)=>{
            if(index === idx){
                
                this.setState({
                    labeldel:true
                });
            }
        });
        
    }
    renderAddLabel = (addlabelArr) =>{
      
        let renderLi = [];
        addlabelArr && addlabelArr.map((item,index)=>{
             renderLi.push(<li onMouseEnter={(e)=>{this.onMouseOver(index)}} onMouseLeave={this.onMouseOut} key={index}>
                            {item}
                            <span className='l-label-del' style={{display:this.state.labeldel === true ? "block" : "none"}} onClick={(e)=>{this.delLabel(index)}}>X</span>
                          </li>);
        });
        return renderLi;
    }
    delLabel = (idx) =>{
        let addlabelArr = this.state.addlabelArr.filter((item,index)=> {return index !== idx});
        console.log(addlabelArr);
        this.setState({
            addlabelArr:addlabelArr
        })
    }
    onInputChange = (e) =>{
        
    }
    cancelClick = () => {
        this.props.history.push(`./myShare`);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                    <Breadcrumb.Item>我的共享</Breadcrumb.Item>
                    <Breadcrumb.Item>分解词条</Breadcrumb.Item>
                </Breadcrumb>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="l-openLabel-content">
                        <div className="l-openLabel-leftEditor">
                            <div className='l-openlabel-row'>
                                <FromLine getFieldDecorator={getFieldDecorator} style={{width:"50%"}} label="词条标题：" placeholder="请输入词条标题" type="wordName"  typeInfo="text" initialValue={""} />
                                <MoreSelValid selWidth={"90%"} style={{width:"50%"}} getFieldDecorator={getFieldDecorator} selChange={this.selChange} label="词条分类：" seltype="wordItem" mode="" placeholder="请选择词条类型" messageInfo="请选择词条类型" type="" require={true} />
                            </div>
                            <FromLine getFieldDecorator={getFieldDecorator} style={{width:"100%"}} label="摘要：" placeholder="请输入词条摘要" type="summary" typeInfo="text" initialValue={""} />
                            <InputCnt labelname={"*词条标签："} inputstyle={{width:"86.5%"}} style={{width:"100%"}} defaultValue={this.state.defaultLabel} placeholder={"请输入词条标签最多五个"} onInputChange={this.onInputChange} pressEnter={this.pressEnter}/>
                            <div style = {{display:this.state.addlabelArr.length!==0 ? "block" : "none"}} className="l-addlabels-list">
                                <ul>
                                    {
                                        this.renderAddLabel(this.state.addlabelArr)
                                    }
                                </ul>
                            </div>
                            <EditorDemo getEditCtn={this.getEditCtn} labelCon={this.state.labelCon} />
                            <div className="l-openLabel-btn">
                                <Button type="primary" style={{marginRight:"10px"}} onClick={(e)=>{this.handleSubmit(e)}}>继续分解</Button>
                                <Button type="primary" style={{marginRight:"10px"}}>保存退出</Button>
                                <Button type="primary" onClick={this.cancelClick}>取消</Button>
                            </div>
                        </div>
                        <div className="l-openLabel-rightDoc">
                            <iframe className='l-label-iframe' frameborder="0" src="./3.pdf"></iframe>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}
const OpenLabel = Form.create()(OpenLabelForm);
export default OpenLabel;