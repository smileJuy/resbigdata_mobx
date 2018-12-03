
import React from 'react';
import 'antd/dist/antd.css';
import styles from './tree.css';
// import './index.css';
import { Menu, Icon, Switch, Input, message  } from 'antd';

const { SubMenu } = Menu;

// class labelTree extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       mode: 'inline',
//       theme: 'light',
//       activeIndex:0,
//       currindex:props.currindex
//     }
//     this.state.treeData = props.the.state.treeData;
//   }
//  componentWillReceiveProps(nextProps){
//   // if(this.props.treeData !== nextProps.treeData){
//     this.setState({
//      treeData:nextProps.treeData,
//      currindex:nextProps.currindex
//     })
//   // }
//  }
//   addMenuClick = () =>{
//     let treenode = {
//       treename: ""
//     };
//      this.state.treeData.push(treenode);
//     this.props.delTreeData(this.state.treeData,this.state.treeData.length-1)
   
//   }
//   delNode = (e,idx) =>{
//     e.stopPropagation();
//     let nodes = this.props.the.state.treeData.filter((element,index)=>{ return index!==idx});
//     let activeidx;
    
//     if(idx >= (this.state.treeData.length-1)){
//       activeidx = idx - 1;
//       this.state.currindex = idx - 1;
//     }else{
//       activeidx = idx;
//     }
//     this.setState({
//       currindex:activeidx,
//       activeIndex:activeidx
//     })
//     this.props.delTreeData(nodes,'f');
//     let treename = nodes[activeidx].treename || nodes[activeidx].guide_title;
//     this.props.getTreeNode(treename,activeidx);
//   }
//   handleTextareaChange = (e,index,name) =>{
//     let inputValue=e.target.value;
//     let idx = index ? index : (this.state.activeIndex);
//     this.state.treeData[idx][name] = inputValue;
//     this.props.the.setState({
//       treeData:  this.state.treeData
//     })

    
    
//   }
//   handleInput=(e,index)=>{
//     let value = e.target.value;
//     let idx = index ? index : (this.state.activeIndex);
//     this.state.treeData[idx].treename = value;
//     this.props.the.setState({
//       treeData:  this.state.treeData
//     })
//   }
// // 点击左侧树事件
//   clickMenu = (item, key, selectedKeys) =>{
//     console.log(item, key, selectedKeys);
//     this.setState({
//       activeIndex:Number(item.key)
//     })
//     if(this.props.popType === "add"){
//       let treeName =this.props.treeData[Number(item.key)].treename;
//       if(treeName){
//         this.props.getTreeNode(treeName,Number(item.key));
//       }
//     }else if(this.props.popType === "modify"){
//       let treeName =this.props.treeData[Number(item.key)].guide_title;
//       if(treeName){
//         this.props.getTreeNode(treeName,Number(item.key));
//       }
//     } 
   
//   }
// //渲染输入框的样式
// inputStyle = (index) => {
//   let inputS = {"width":"60%","border":this.state.activeIndex === index ? "1px solid #d9d9d9" : "none", "backgroundColor":this.state.activeIndex === index ? "#fff" : ""};
//   return inputS;
// }
//   render() {
//     let treeList = [];
//     if(this.props.popType === "add"){
//       this.props.treeData.map((element,index)=>{
//         treeList.push(<Menu.Item key={index} style={{"height":"60px","lineHeight":"60px"}}>
//           <Icon type="file-text" />
//           <Input onChange={(e,index) => { this.handleTextareaChange(e,index,'treename') }} onBlur={(e,index) => this.handleInput(e,index)} style={this.inputStyle(index)} placeholder="请输入..." value={element.treename}/>
//           {/* <span style={{display:this.state.activeIndex === index ? "":"none","position":"absolute","right":"32%","top":"20px","color":"red","font-size":"12px"}}>{this.state.inputValid}</span> */}
//           <div className='l-expbook-dec' style={{"display":this.state.activeIndex === index ? "block" : "none"}} onClick={(e)=>{this.delNode(e,index)}}>-</div>
//         </Menu.Item>)
//          })
//     }else if(this.props.popType === "modify"){
//       this.props.treeData.map((element,index)=>{
//         treeList.push(<Menu.Item key={index} style={{"height":"60px","lineHeight":"60px"}}>
//           <Icon type="file-text" />
//           <Input onChange={(e,index) => { this.handleTextareaChange(e,index,'guide_title') }} onBlur={(e,index) => this.handleInput(e,index)} style={this.inputStyle(index)} placeholder="请输入..." value={element.guide_title}/>
//           {/* <span style={{"position":"absolute","right":"25%","top":"20px","color":"red"}}>{this.state.inputValid}</span> */}
//           <div className='l-expbook-dec' style={{"display":this.state.activeIndex === index ? "block" : "none"}} onClick={(e)=>{this.delNode(e,index)}}>-</div>
//         </Menu.Item>)
//          })
//     }
    
   
//     return (
//       <div>
//         <Menu
//           style={{"width":"100%"}}
//           defaultSelectedKeys={['0']}
//           defaultOpenKeys={['sub1']}
//           mode={this.state.mode}
//           theme={this.state.theme}
//           onClick = {(item, key, selectedKeys) => {this.clickMenu(item, key, selectedKeys)}}
//         >
//           {treeList}
       
//         </Menu>
//         <div className='l-expbook-add' onClick={() => { this.addMenuClick() }}>+</div> 
//       </div>
//     );
//   }
// }


function LabelTree(props){
  let treeList = [];
  if(props.popType === "add"){
    props.labelData.map((element,index)=>{
      treeList.push(<Menu.Item key={index} style={{"height":"60px","lineHeight":"60px"}}>
        <Icon type="file-text" />
        <Input onChange={(e,index) => { props.handleTextareaChange(e,index,'labelname') }} onBlur={(e,index) => props.handleInput(e,index)} style={props.inputStyle(index)} placeholder="请输入..." value={element.labelname}/>
        {/* <span style={{display:this.state.activeIndex === index ? "":"none","position":"absolute","right":"32%","top":"20px","color":"red","font-size":"12px"}}>{this.state.inputValid}</span> */}
        <div className='l-expbook-dec' style={{"display":props.activeIndex === index ? "block" : "none"}} onClick={(e)=>{props.delNode(e,index)}}>-</div>
      </Menu.Item>)
       })
  }else if(props.popType === "modify"){
    props.labelData.map((element,index)=>{
      treeList.push(<Menu.Item key={index} style={{"height":"60px","lineHeight":"60px"}}>
        <Icon type="file-text" />
        <Input onChange={(e,index) => { props.handleTextareaChange(e,index,'guide_title') }} onBlur={(e,index) => props.handleInput(e,index)} style={props.inputStyle(index)} placeholder="请输入..." value={element.labelname}/>
        {/* <span style={{"position":"absolute","right":"25%","top":"20px","color":"red"}}>{this.state.inputValid}</span> */}
        <div className='l-expbook-dec' style={{"display":props.activeIndex === index ? "block" : "none"}} onClick={(e)=>{props.delNode(e,index)}}>-</div>
      </Menu.Item>)
       })
  }
  return (
    <div>
        <Menu
          style={{"width":"100%"}}
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'light'}
          onClick = {(item, key, selectedKeys) => {props.clickMenu(item, key, selectedKeys)}}
        >
          {treeList}
       
        </Menu>
        <div className='l-expbook-add' onClick={() => { props.addMenuClick() }}>+</div> 
      </div>
  )
}
export default LabelTree;    