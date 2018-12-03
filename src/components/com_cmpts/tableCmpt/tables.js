import { Table, Divider, Tag } from 'antd';
import React,{Component} from 'react';
import styles from './table.css';
import { Button } from 'antd';

const data = [{
  key: '1',
  name: '文档',
  age: 32,
  tags: ['nice', 'developer'],
  caozuotype:"上传"
}, {
  key: '2',
  name: '文件夹',
  age: 42,
  tags: ['loser'],
  caozuotype:"下载"
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tags: ['cool', 'teacher'],
  caozuotype:"删除"
}];
const tabletitle = {
  comLabel:{
    columns:[{
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      )
    }, {
      title: '最后编辑者',
      dataIndex: 'lastpeople',
      key: 'lastpeople',
    },{
      title: '最后编辑时间',
      dataIndex: 'lasttime',
      key: 'lasttime',
    },{
      title: '热度',
      dataIndex: 'age',
      key: 'age',
    }]
  },typeMng:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '词条数',
      dataIndex: 'num',
      key: 'num',
    }]
  },labelCheck:{
    columns:[{
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },{
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      )
    },{
      title: '分类',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '申请人',
      dataIndex: 'people',
      key: 'people',
    }, {
      title: '申请时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },
  log:{
    columns:[{
      title: '名称' ,
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title:'路径',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '大小',
      dataIndex: 'small',
      key: 'small',
    }, {
      title: '操作人员',
      dataIndex: 'people',
      key: 'people',
    }, {
      title: '操作时间',
      dataIndex: 'time',
      key: 'time',
    },{
      title: '操作类型',
      key: 'caozuotype',
      dataIndex: 'caozuotype',
    }]
  },
  docGrp:{
    columns:[{
      title: '文档名' ,
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title:'最后编辑时间',
      dataIndex: 'age',
      key: 'age',
    }]
  },
  recycleMng:{
    columns:[{
      title: '名称' ,
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title:'路径',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '大小',
      dataIndex: 'small',
      key: 'small',
    },{
      title: '类型',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
    }, {
      title: '删除人员',
      dataIndex: 'delpeople',
      key: 'delpeople',
    }, {
      title: '删除时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },public:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '大小',
      dataIndex: 'age',
      key: 'age',
    },{
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '操作者',
      dataIndex: 'people',
      key: 'people',
    },{
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },private:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '大小',
      dataIndex: 'age',
      key: 'age',
    },{
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },myMessage:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, 
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
    },{
      title: '分享人',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '分享时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },myShareFile:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, 
    {
      title: '大小',
      key: 'size',
      dataIndex: 'size',
    },{
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },myShareLabel:{
    columns:[{
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, 
{
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
},{     
 title: '状态',
      dataIndex: 'state',
      key: ' state ',
    },{
      title: '最后编辑时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },myCollectionFile:{
    columns:[{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, 
{
      title: '大小',
      key: 'size',
      dataIndex: 'size',
},{
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },{
      title: '操作者',
      dataIndex: 'person',
      key: 'person',
    },{
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },myCollectionLabel:{
    columns:[{
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, 
{
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
},{
      title: '最后编辑者',
      dataIndex: 'person',
      key: 'person',
    },{
      title: '最后编辑时间',
      dataIndex: 'time',
      key: 'time',
    }]
  },setProjectDirector:{
    columns:[{
      title: '用户ID',
      dataIndex: 'ts_employee_id',
      key: 'ts_employee_id',
      }, {
      title: '用户名称',
      dataIndex: 'emp_name',
      key: 'emp_name',
    }]
  },ProjectDirectors:{
    columns:[{
      title: '用户ID',
      dataIndex: 'ts_employee_id',
      key: 'ts_employee_id',
    }, {
      title: '用户名称',
      dataIndex: 'emp_name',
      key: 'emp_name',
    }]
  },setDepartDirector:{
    columns:[{
      title: '用户ID',
      dataIndex: 'ts_employee_id',
      key: 'ts_employee_id',
      }, {
      title: '用户名称',
      dataIndex: 'emp_name',
      key: 'emp_name',
    }]
  },DepartDirectors:{
    columns:[{
      title: '用户ID',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '用户名称',
      dataIndex: 'emp_name',
      key: 'emp_name',
    }]
  },setDirDirector:{
    columns:[{
      title: '目录名',
      dataIndex: 'name',
      key: 'name',
      }]
  },
  allLabels:{
    columns:[{
      title: '词条名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>
    },{
      title: '同名词条数量',
      dataIndex: 'num',
      key: 'num',
    },{
      title: '热度',
      dataIndex: 'age',
      key: 'age',
    }]
  }
}

class DataTable extends Component{
    constructor(props){
        super(props);
     
        let column = this.renderOperate(props.tabletype,tabletitle);
        this.state={
            Current:1,
            selectedRowKeys:[],
            selectkeyObj:{},
            selectDataObj:{},
            column:column,
            selectDatas:""
        }
    }
    componentWillReceiveProps(nextProps){
      let column = this.renderOperate(nextProps.tabletype,tabletitle);
      this.setState({
        column:column
      })
    }
    tableBtn = (e,type) =>{
      e.stopPropagation();
      switch(type){
        case 'labelcollect'://标签收藏
          this.props.showPop('collect');
        break;
        case 'pass':
          this.props.passPop();
        break;
        case 'back':
          this.props.showBack();
        break;
        case 'typemod':
          this.props.showPop("add","修改");
          debugger
        break;
        case 'mycollect'://我的消息收藏
          this.props.showPop("collect");
        break;
        case 'resetdel'://设置移除
          // this.props.showPop("add");
        break;
        case 'recycleback':
          this.props.showPop("back");
        break;
        case 'recycledel':
          this.props.showPop("del");
        break;
        case 'mycollect':
          this.props.showPop("collect");
        break;
        case 'ladelSharedel':
          this.props.del();
        break;
        case 'ladelSharemod':
          this.props.showPop("add","修改");
        break;
        case 'pubcollect':
          this.props.showPop("collect")
        break;
        case 'pubmod':
          this.props.showPop("add","修改")
        break;
        case 'primod':
          this.props.showPop("add","修改");
        break;
        case 'docgrpCollect':
          this.props.showPop("collect");
        break;
        default:;
      }
      
    }
    renderOperate = (type,tabletitle) =>{
      const _this = this;
      let operate = {
        comLabel:{
          title: '操作',
          key: '操作',
          render: (text, record) => (
            <span>
              <a onClick={(e)=>{this.tableBtn(e,"labelcollect")}}>收藏</a>

            </span>
          ),
      },
      labelCheck:{
          title: '操作',
          key: '操作',
          render: (text, record) => (
            <span>
              <a onClick={(e)=>{this.tableBtn(e,"pass")}}>通过</a>
              <Divider type="vertical" />
              <a onClick={(e)=>{this.tableBtn(e,"back")}}>退回</a>
            </span>
          ),
      },
      typeMng:{
          title: '操作',
          key: '操作',
          render: (text, record) => (
            <span>
              <a onClick={(e)=>{this.tableBtn(e,"typemod")}}>修改</a>
            </span>
          ),
      },
      myMessage:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"mycollect")}}>收藏</a>
          </span>
        ),
    },
      delReset:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"resetdel")}}>移除</a>
          </span>
        ),
      },
      recycleMng:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"recycleback")}}>还原</a>
            <Divider type="vertical" />
            <a onClick={(e)=>{this.tableBtn(e,"recycledel")}}>删除</a>
          </span>
        ),
      },
      fileShare:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={_this.props.openLabel}>分解词条</a>
          </span>
        ),
      },
      labelShare:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"ladelSharedel")}}>删除</a>
            <Divider type="vertical" />
            <a onClick={(e)=>{this.tableBtn(e,"ladelSharemod")}}>修改</a>
          </span>
        ),
      },
      pub:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"pubcollect")}}>收藏</a>
            <Divider type="vertical" />
            <a onClick={(e)=>{this.tableBtn(e,"pubmod")}}>修改</a>
          </span>
        ),
      },
      pri:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"primod")}}>修改</a>
          </span>
        ),
      },
      docGrp:{
        title: '操作',
        key: '操作',
        render: (text, record) => (
          <span>
            <a onClick={(e)=>{this.tableBtn(e,"docgrpCollect")}}>编辑</a>
          </span>
        ),
      },
    };
    let column = [];
      switch(type){
        case 'comLabel':
          column = tabletitle.comLabel.columns;
          column.push(operate.comLabel);
        break;
        case 'allLabels':
        column = tabletitle.allLabels.columns;
        break;
        case 'labelCheck':
        column = tabletitle.labelCheck.columns;
        column.push(operate.labelCheck);
        break;
        case 'typeMng':
        column = tabletitle.typeMng.columns;
        column.push(operate.typeMng);
        break;
        case 'pub'://文件（公有库和私有库）
        column = tabletitle.public.columns;
        column.push(operate.pub);
        break;
        case 'pri':
        column = tabletitle.private.columns;
        column.push(operate.pri);
        break;
        case 'myMessage':
        column = tabletitle.myMessage.columns;
        column.push(operate.myMessage);
        break;
        case 'delReset':
        column = tabletitle.DepartDirectors.columns;
        column.push(operate.delReset);
        break;
        case 'recycleMng':
        column = tabletitle.recycleMng.columns;
        column.push(operate.recycleMng);
        break;
        case 'fileShare':
        column = tabletitle.myShareFile.columns;
        column.push(operate.fileShare);
        break;
        case 'labelShare':
        column = tabletitle.myShareLabel.columns;
        column.push(operate.labelShare);
        break;
        case 'log':
        column = tabletitle.log.columns;
        break;
        case 'allLabels':
        column = tabletitle.allLabels.columns;
        break;
        case 'setProjectDirector':
        column = tabletitle.setProjectDirector.columns;
        break;
        case 'setDirDirector':
        column = tabletitle.setDirDirector.columns;
        break;
        case 'setDepartDirector':
        column = tabletitle.setDepartDirector.columns;
        break;
        case 'myCollectionFile':
        column = tabletitle.myCollectionFile.columns;
        break;
        case 'myCollectionLabel':
        column = tabletitle.myCollectionLabel.columns;
        break;
        case 'docGrp':
        column = tabletitle.docGrp.columns;
        column.push(operate.docGrp);
        break;
        default:;
      }

      return _this.delRepeatEle(column);
    }
    // 表头数据去重
    delRepeatEle = (arr) =>{ 
      var result = [];
      var obj = {};
      for(var i =0; i<arr.length; i++){
        if(!obj[arr[i].key]){
            result.push(arr[i]);
            obj[arr[i].key] = true;
        }
      }

      return result;
  }

    // 行点击事件
    clickRow = (e,record) =>{
          // e.stopPropagation();
          let selectData = this.state.dataSource;
            // this.props.selectFun(selectData[record.no-1],record.exp_id);
          
            this.props.labelClick(record);
            // console.log("1111111",record.no,selectData[record.no-1])
            //  this.setState({
            //  activeIndex:(record.no-1)
            // })
        
      }
    //   复选框选中事件
      onSelectChange = (selectedRowKeys,selectedRows) =>{
      
        let selectDataObj = this.state.selectDataObj,selectkeyObj = this.state.selectkeyObj;
        selectDataObj[this.state.Current] = selectedRows;
        selectkeyObj[this.state.Current] = selectedRowKeys;
        let selectDatas = [];
        for(let key in selectDataObj){
          if(selectDataObj[key].length!==0){
            for(let i=0;i<selectDataObj[key].length;i++){
              selectDatas.push(selectDataObj[key][i]);
            }
          }
        }
        this.setState({
          selectDataObj:selectDataObj,
          selectkeyObj:selectkeyObj,
          selectDatas:selectDatas
        })
        // this.props.getCheckId(selectDatas);
        
      }
    //   设置行样式
      setClassName=(index)=>{
        return index === this.state.activeIndex ? `${styles['l-table-row-active']}` : "";
      }
    render(){
        let tablestyle = this.props.tablestyle;
        const selectedRowKeys  = this.state.selectkeyObj[this.state.Current];
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
          
            <div className={`l-table-${tablestyle}`}>
                <Table 
                    columns={this.state.column}
                    dataSource={data}
                    selectDatas={this.state.selectDatas}
                    pagination={{  // 分页
                        current: this.state.Current,
                        total: this.state.total,
                        pageSize:this.props.pageSize,
                        onChange: this.antdPage,
                        }}  
                    className='l-table-td'
                    onRow={(record) => {
                        return this.props.rowClick === true ? {
                            onClick:(e)=>{this.clickRow(e,record)}
                        } : "";
                    }}
                    rowClassName={this.props.rowClick === true ? this.setClassName : ""}
                    rowSelection={this.props.rowSel === true ? rowSelection : ""}
                 />
            </div>
        )
    }
}
export {DataTable};