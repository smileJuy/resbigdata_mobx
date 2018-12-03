import React,{Component} from 'react';
import { Menu, Icon, Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import userImg from './img/01.jpg';
import styles from './sidemenu.css';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
  constructor(props){
    super(props);
    let link = window.location.href.split("/index")[1];
    this.rootSubmenuKeys = ['sub1','sub2','sub3','sub4','sub5','sub6'];
    this.state = {
      collapsed: link === '/openLabel:modeId' ? true : false,
      openKeys: ['sub1'],
      showUser:true
    };
  }
  
  onCollapse = (collapsed) => {
    console.log(collapsed,this.props);
    this.setState({ collapsed:collapsed,showUser:!this.state.showUser,openKeys:collapsed === true ? [] : this.state.openKeys });
    
  }
  renderMenu = (treeData) => {
   const _this = this;
    return treeData.map((item,index) => {
      if(item.children){
        return(<SubMenu
                  key={item.treekey}
                  title={<span><Icon type={item.treeicon} /><span>{item.treename}</span></span>}
                >
                  {this.renderMenu(item.children)}
              </SubMenu>)
      }else{
        var path = `${this.props.match.url}${item.path}`;
        return (<Menu.Item key={item.treekey}>
                  <Link to={path}><Icon type={item.treeicon} />
                  <span>{item.treename}</span></Link>
                </Menu.Item>);
      }
    })
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          
        >
            <div className="l-menu-headerbox" style={{height:this.state.collapsed === false ? "100px" : "50px"}}>
              <div className="l-menu-header">
                  <div style={{display:this.state.collapsed === false ? "block" : "none"}} className='l-menu-img'>
                    <img src={userImg} alt="汪莉莉" title="汪莉莉" />
                  </div>
                  <div className={this.state.collapsed === false ? "l-menu-userinfo" : "l-menu-user"}>
                    <p>汪莉莉</p>
                    <p style={{display:this.state.collapsed === false ? "block" : "none"}}>员工</p>
                  </div>
                </div>
            </div>
         
            <Menu openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange} style={{textAlign:'left',background:'rgb(231, 226, 215)'}} theme="light" defaultSelectedKeys={['1']} mode="inline">
                  {this.renderMenu(this.props.treeData)}
            </Menu>
    
          </Sider>
    );
  }
}
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work

export default SiderMenu;