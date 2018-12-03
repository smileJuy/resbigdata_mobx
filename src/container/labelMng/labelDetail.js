import React,{Component} from 'react';
import './label.css';
import {RowList,ColumnList,RowListTag1,RowListTag2} from '../../components/lists/listbaseCmpt';
import { Breadcrumb} from 'antd';
import { Button } from 'antd';

class LabelDetail extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    cancelClick=()=>{
        // this.props.history.push(`./comLabel:modeId`)
        window.location.href = ('./comLabel:modeId')
    }
    render(){
        return(
            <div className="y-labelDetail-container">
                <div className="y-labelDetail-position">
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>全部词条</Breadcrumb.Item>
                        <Breadcrumb.Item>同名词条</Breadcrumb.Item>
                        <Breadcrumb.Item>词条详情</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button onClick={this.cancelClick} type="primary" style={{position:"absolute",right:"20px",top:"10px"}}>返回</Button>
                </div>
                <div className="y-labelDetail-content">
                    <div className="y-labelDetail-left">
                        <RowList />
                        <RowListTag1 title={"标签"} />
                        <RowListTag2 title={"分类"} />
                        <ColumnList title={"关联文档"} span={"y-line-hr-hide"} />
                    </div>
                    <div className="y-labelDetail-right">
                        <h1 style={{margin:"40px 0"}}>项目术语</h1>
                        <p style={{margin:"40px 0",fontWeight:"200"}}>摘要：<span>暂无摘要</span></p>
                        <ColumnList span={"y-line-hr-hide"} />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LabelDetail;