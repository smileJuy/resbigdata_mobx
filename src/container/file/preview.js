import React,{Component} from 'react';
import { Breadcrumb,Button, Menu, Dropdown, Icon  } from 'antd';
import {ColumnList} from '../../components/lists/listbaseCmpt';
import './file.css';

const menu = (
    <Menu>
      {/* <Menu.Item>
        <a>回退到当前版本</a>
      </Menu.Item> */}
      <Menu.Item>
        <a href="#">下载</a>
      </Menu.Item>
    </Menu>
  );


class PreView extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    returnback=()=>{
        this.props.history.push('./public');
    }
    liClick=()=>{
        this.props.history.push('./labelDetail:modeId');
    }
    render(){
        return(
            <div className="y-preview-container">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>文件</Breadcrumb.Item>
                    <Breadcrumb.Item>文件预览</Breadcrumb.Item>
                </Breadcrumb>
                <div className="y-preview-head">
                    <h2 style={{display:"inline-block"}}>文件名.docx</h2>
                    <Button style={{float:"right"}} onClick={this.returnback}>返回</Button>
                </div>
                <span className="y-line-hr" ></span>
                <div className="y-preview-content">
                    <div className="y-preview-content-left">
                        <iframe title="previewContent" style={{width:"100%",height:"800px",border:"1px solid #ccc"}}></iframe>
                    </div>
                    <div className="y-preview-content-right">
                        <div>
                            <h3 style={{margin:"10px 20px"}}>版本信息</h3>
                            <ul className="y-preview-content-right-ul">
                                <li>
                                    V2.0<span style={{marginLeft:"10px"}}>当前版本</span>
                                    
                                    <span style={{float:"right",marginRight:"20px"}}>
                                        <span style={{marginRight:"15px"}}>
                                            67.85KB
                                        </span>
                                        <a className="ant-dropdown-link" href="#">下载 </a>
                                    </span>
                                </li>
                            </ul>
                            <span style={{width:"90%",marginLeft:"26px",display:"inline-block",border:"1px solid #ccc"}} ></span>
                        </div>
                        <div style={{margin:"0 20px"}}>
                            <h3>关联词条</h3>
                            <ul className="y-label-ul">
                                <li onClick={this.liClick}>词条1</li>
                                <li>词条2</li>
                                <li>词条3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreView;