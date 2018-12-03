import React,{ Component } from 'react';
import './listbaseCmpt.css';
import { Icon } from 'antd';

function RowList(props){
    return (
        <div className="y-rowlist-container" >
            <h3>项目术语</h3>
            <ul className="y-rowlist-ul" >
                <li><Icon style={{color:"black"}} type="heart" />收藏词条</li>
                <li><Icon style={{color:"black"}} type="share-alt" />分享词条</li>
                <li><Icon style={{color:"black"}} type="edit" />编辑词条</li>
            </ul>
            <span className="y-line-hr" ></span>
            {/* 隐藏线条类名：y-line-hr-hide */}
        </div>
    )
}

function RowListTag1(props){
    return (
        <div className="y-rowlist-container" >
            <h3>{props.title}</h3>
            <ul className="y-rowlist-ul-tag y-rowlist-ul" >
                <li>标签1</li>
                <li>标签2</li>
                <li>标签3</li>
            </ul>
            <span className="y-line-hr" ></span>
            {/* 隐藏线条类名：y-line-hr-hide */}
        </div>
    )
}

function RowListTag2(props){
    return (
        <div className="y-rowlist-container" >
            <h3>{props.title}</h3>
            <ul className="y-rowlist-ul-tag y-rowlist-ul" >
                <li>标签1</li>
            </ul>
            <span className="y-line-hr" ></span>
            {/* 隐藏线条类名：y-line-hr-hide */}
        </div>
    )
}

function ColumnList(props){
    return (
        <div className="y-columnlist-container" >
            <h3>{props.title}</h3>
            <ul className="y-columnlist-ul" >
                <li><span>标题：</span>测试1</li>
                <li><span>标题：</span>测试2</li>
                <li><span>标题：</span>测试3</li>
            </ul>
            <span className={props.span} ></span>
            {/* 隐藏线条类名：y-line-hr-hide */}
        </div>
    )
}

export {RowList,ColumnList,RowListTag1,RowListTag2};