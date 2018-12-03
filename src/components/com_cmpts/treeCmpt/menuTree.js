import React from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";
import './tree.css';
const TreeNode = Tree.TreeNode;
// 实验分类树
class MenuTree extends React.Component {
    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
  onSelect(selectedKeys, obj) {
      const _self = this;
        //选中的状态
        if (obj.selected) {
          console.log(obj);
            let selValue = {belongto:obj.node.props.value,grade:obj.node.props.grade,expDefaultValue:obj.node.props.value}
            _self.props.getExpTypeValue(selValue);
        } else {
            let selValue = {belongto:'',grade:'',expDefaultValue:''}
            _self.props.getExpTypeValue(selValue);
        }
  }

  renderTreeNodes = (data) => {
    return data.map((item,index) => {
      if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} value={item.value} grade={item.key} dataRef={item}>
              {this.renderTreeNodes(item.children)}
            </TreeNode>
          );
      }
      return <TreeNode {...item} />;
    });
  }
  clearSelect = (e) =>{
      e.stopPropagation();
    let selValue = {belongto:'',grade:'',expDefaultValue:''}
    this.props.getExpTypeValue(selValue);
  }
  render() {
    return (
    <div style={this.props.style}>
        {/* <Button color="blue" btnName="清空选择" onClick={(e) => { this.clearSelect(e) }} /> */}
        <label className='l-form-label'>{this.props.treeName}</label>
        <div className='l-form-treenode'>
            <Tree
                showLine
                defaultExpandedKeys={['0-1']}
                defaultExpandParent={['0-1']}
                onSelect={this.onSelect}
            >
                {this.renderTreeNodes(this.props.treenodeData)}
            </Tree>
        </div>
      </div>
    );
  }
}
export {MenuTree};