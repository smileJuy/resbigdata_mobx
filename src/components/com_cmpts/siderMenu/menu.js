import React,{Component} from 'react';
import { Menu, Icon, Layout } from 'antd';
import styles from './sidemenu.css';

function MenuCmpt(props) {
    let menu = [];
    props.treeData && props.treeData.map((item,index) => {
        menu.push(<Menu.Item key={item.key}>
                    <Icon type={item.treeicon} />
                    <span>{item.treename}</span>
                </Menu.Item>);
    })
    return (
        <div>
            <Menu 
                defaultSelectedKeys={[props.treeData[0].key]}
                mode="inline"
                theme="light" onClick={props.menuClick}>
                  {menu}
            </Menu>
    
        </div>
    );
  }
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work

export {MenuCmpt};