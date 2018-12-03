import React,{Component} from 'react';
import { Layout, Button, Icon } from 'antd';
import "antd/dist/antd.css";
import '../components/com_cmpts/tableCmpt/table.css';
import './index.css';
import SiderMenu from '../components/com_cmpts/siderMenu/siderMenu';
import {observer,inject} from 'mobx-react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import asyncComponent from '../components/asyncComponent';
import logo from './img/logo.png';
const AllLabels=asyncComponent(()=>(import('../container/labelMng/allLabel')))
const ComLabel=asyncComponent(()=>(import('../container/labelMng/comLabel')))
const LabelDetail=asyncComponent(()=>(import('../container/labelMng/labelDetail')))
const AdMdLabel=asyncComponent(()=>(import('../container/labelMng/adMdLabel')))
const TypeMng=asyncComponent(()=>(import('../container/labelMng/typeMng')))
const PreView=asyncComponent(()=>(import('./file/preview')))
const LabelCheck=asyncComponent(()=>(import('../container/labelMng/labelCheck')))
const OpenLabel=asyncComponent(()=>(import('../container/userCenter/openLabel')))
const IndexPage=asyncComponent(()=>(import('../container/indexPage')))
const MyCollection=asyncComponent(()=>(import('./userCenter/myCollection')))
const MyShare=asyncComponent(()=>(import('./userCenter/myShare')))
const MyMessage=asyncComponent(()=>(import('./userCenter/myMessage')))
const Recycle=asyncComponent(()=>(import('./other/recycle')))
const Log=asyncComponent(()=>(import('./other/log')))
const Public=asyncComponent(()=>(import('./file/public')))
const Private=asyncComponent(()=>(import('./file/private')))
const DocRegroup=asyncComponent(()=>(import('./file/docRegroup')))
const ResetPer=asyncComponent(()=>(import('./reset/resetPer')))
const ResetLabelPer=asyncComponent(()=>(import('./reset/resetLabelPer')))
const ResetGrant=asyncComponent(()=>(import('./reset/resetGrant')))
const ResetProject=asyncComponent(()=>(import('./reset/resetProject')))

const NoMatch=asyncComponent(()=>(import('../container/noMatch')))

const { Header, Content, Footer } = Layout;
const treeData = [{
    treename:"词条",
    treekey:"sub1",
    treeicon:"pie-chart",
    children:[{
      treename:"全部词条",
      treekey:"sub1-1",
      treeid:"node1-1",
      treeicon:"",
      path:"/allLabels",
      component:AllLabels,
      exact:true
    },
    {
        treename:"分类管理",
        treekey:"sub1-2",
        treeid:"node1-2",
        treeicon:"",
        path:"/typeMng",
        component:TypeMng,
      },
      {
        treename:"词条审核",
        treekey:"sub1-3",
        treeid:"node1-3",
        treeicon:"",
        path:"/labelCheck",
        component:LabelCheck
      }
    ]
  },
  {
    treename:"文件",
    treekey:"sub2",
    treeicon:"file",
    children:[{
      treename:"公有库",
      treekey:"sub2-1",
      treeid:"node2-1",
      treeicon:"",
      path:"/public",
      component:Public
    },
    {
        treename:"私有库",
        treekey:"sub2-2",
        treeid:"node2-2",
        treeicon:"",
        path:"/private",
        component:Private
      }
    //   {
    //     treename:"文档重组",
    //     treekey:"sub2-3",
    //     treeid:"node2-3",
    //     treeicon:"",
    //     path:"/noMatch",
    //     component:NoMatch
    //   }
    ]
  },
  {
    treename:"个人中心",
    treekey:"sub3",
    treeicon:"user",
    children:[{
      treename:"我的收藏",
      treekey:"sub3-1",
      treeid:"node3-1",
      treeicon:"",
      path:"/myCollection",
      component:MyCollection
    },
    {
        treename:"我的共享",
        treekey:"sub3-2",
        treeid:"node3-2",
        treeicon:"",
        path:"/myShare",
        component:MyShare
      },
      {
          treename:"我的消息",
          treekey:"sub3-3",
          treeid:"node3-3",
          treeicon:"",
          path:"/myMessage",
          component:MyMessage
        }]
  },
  {
    treename:"日志",
    treekey:"sub4",
    treeicon:"form",
    treeid:"node4",
    path:"/logMng",
    component:Log
  },
  {
    treename:"回收站",
    treekey:"sub5",
    treeicon:"delete",
    treeid:"node5",
    path:"/recycle",
    component:Recycle
  },
  {
    treename:"设置",
    treekey:"sub6",
    treeicon:"setting",
    children:[{
      treename:"平台管理",
      treekey:"sub6-1",
      treeid:"node6-1",
      treeicon:"",
      path:"/resetPer",
      component:ResetPer
    },
    {
        treename:"部门管理",
        treekey:"sub6-2",
        treeid:"node6-2",
        treeicon:"",
        path:"/resetLabelPer",
        component:ResetLabelPer
      },
      {
          treename:"项目管理",
          treekey:"sub6-3",
          treeid:"node6-3",
          treeicon:"",
          path:"/resetProject",
          component:ResetProject
        }
        // {
        //     treename:"权限设置",
        //     treekey:"sub6-4",
        //     treeid:"node6-4",
        //     treeicon:"",
        //     path:"/resetGrant",
        //     component:ResetGrant
        //   }
        ]
  },
];
class Index extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    // 路由渲染
    renderRoute = (treeData) => {
        console.log(this);
        const _this = this;
        return treeData.map((item, index) => {
            if(item.children){
                return this.renderRoute(item.children);
            }else{
                if(item.path!==null || item.path!==undefined){
                    return (<Route
                        exact   
                        key={index}
                        path={this.props.match.url + item.path}
                        exact={item.exact}
                        component={item.component}
                        {..._this.props}
                        match={_this.props.match}
                        history={_this.props.history}
                        />)
               
                }else{
                    return (<Route
                        exact
                        key={index}
                        component={NoMatch}
                        />)
                }
            }
            
            
        })
    }
    render(){
        console.log(this.props);
        return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenu {...this.props} treeData={treeData} />
                <Layout style={{ background: '#fff' }}>
                    <Header style={{ background: '#aabec7', padding: 0 }}>
                        <div className='l-header-logoinfo'>
                            <img src={logo} alt="淞幸科技" />
                            <h1>软件资源大数据平台</h1>
                        </div>
                        <div className='l-header-logout'>
                            <Button style={{background: '#aabec7',border:"none"}}><Icon type="logout" />注销登录</Button>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px',height:"100%" }}>
                        <div style={{ flex: 1, padding: "10px" ,height:"100%"}}>
                        <Switch>
                            {this.renderRoute(treeData)}
                            <Route history={this.props.history} exact path={this.props.match.url + "/comLabel:modeId"} component={ComLabel} {...this.props} />
                            <Route history={this.props.history} exact path={this.props.match.url + "/labelDetail:modeId"} component={LabelDetail} {...this.props} />
                            <Route history={this.props.history} exact path={this.props.match.url + "/adMdLabel:modeId"} component={AdMdLabel} {...this.props} />
                            <Route history={this.props.history} exact path={this.props.match.url + "/openLabel:modeId"} component={OpenLabel} {...this.props} />
                            {/* 文档预览 */}
                            <Route history={this.props.history} exact path={this.props.match.url + "/preview:modeId"} component={PreView} {...this.props} />
                            
                        </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
      </Router>
        )
    }
}
export default inject(stores=>{
    const userStore= stores.rootStore.userStore
    return {
        userStore
    }
})(observer(Index))