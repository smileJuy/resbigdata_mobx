import React,{Component} from 'react';
import { Input, Form, Select, message, Icon, Upload, Button } from 'antd';
import styles from './form.css';
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
  };
// 搜索框
function SearchInput(props){
    return (
        <div style={props.style}>
            <Search
                placeholder={props.placeholder}
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                />
        </div>
    )
}
// 上传文件（按钮无列表）
function UploadFile(props){
    const _this = this;
    const uploadprops = {
        name: 'file',
        count:0,
        action: props.url,
        accept:"application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {//上传文件改变时的状态
            if (info.file.status === 'uploading'&&_this.state.count===0) {
                message.loading("上传中，请稍后",0);
                // _this.setState({
                //     count:_this.state.count+1
                // })
                console.log(info.file, info.fileList);
            }

            console.log(info.file, info.fileList);
            //   let param2 = {cou_id:this.state.cou_id};

            // this.asyncData(this.props.getUrl, param2, "", "");
            if (info.file.status === 'done') {
                message.destroy();
                message.success(`${info.file.name} 上传成功！`);
                // _this.setState({
                //     pdfUrl:AjaxUrl + info.file.response.url,
                //     wordName:info.file.response.wordName,
                //     count:_this.state.count-1
                // })
                

            } else if (info.file.status === 'error') {
                message.destroy();
                message.error(`${info.file.name} 上传失败！`);
                // _this.setState({
                //     count:_this.state.count-1
                // })
            }
        },
    };
    return (
         <Upload {...uploadprops} showUploadList={props.showList}>
            <Button>
                <Icon type="upload" /> {props.uploadName}
            </Button>
        </Upload> 
    )
}

// 表单：输入框
function FromLine(props) {
    var typeData = props.type,message=props.message,messageInfo=props.messageInfo;
    var rules = [];
    if(typeData === "email") {
        rules.push({type: typeData, message: message});
    }
    rules.push({required: true, message: messageInfo});
    rules.push({pattern:props.RegExp});
    rules.push({validator:props.validatorFun});
    return(
        <FormItem
            {...formItemLayout}
            label={props.label}
            hasFeedback
            style={props.style}
            >
            {props.getFieldDecorator(typeData, {
                rules: rules,
                initialValue:props.initialValue
            })(
                <Input placeholder={props.placeholder} type={props.typeInfo} onBlur={props.onBlur} disabled={props.disabled} />
            )}
        </FormItem>
    );
  }
  // 下拉选框：表单验证选择多个
  function MoreSelValid(props){
    let typeData = props.type,message=props.message,messageInfo=props.messageInfo,require=props.require,disable=props.seldisable,selectData = props.selectData;
  
    var optionArr = [],defaultValue = "",type="",selectJson={},roomvalue=[];
    for (var key in selectData) {
        type = key;
        if(type !== "classroom"){
          defaultValue = props.defaultValue ? props.defaultValue : (selectData[key].data.length!==0 ? selectData[key].data[0].value : "") ;
        }else{
        //   (selectData[key].data.length!==0 ? roomvalue.push(selectData[key].data[0].data) : "")
          defaultValue = props.defaultValue ? props.defaultValue : roomvalue;
        }
        // defaultValue = props.defaultValue ? props.defaultValue : (selectData[key].data.length!==0 ? selectData[key].data[0].value : "") ;
        selectData[key].data.forEach((item,index) => {
            let value = key === "classroom" ? item.data : item.value;
            optionArr.push(<Option value={value} title={item.data}>{item.data}</Option>);
        });
    }
    if(props.selType === "classroom"){
      selectJson = {
          initialValue:defaultValue,
          rules:[{required: require, message: messageInfo,type:typeData}]
      };
    }else{
      if(defaultValue) {
        selectJson = {
            initialValue:defaultValue,
            rules:[{required: require, message: messageInfo,type:typeData}]
        };
      } else{
          selectJson = {
              rules:[{required: require, message: messageInfo,type:typeData}]
          };
          
      }
    }
    
    return (
                <FormItem
                    {...formItemLayout}
                    label={props.label}
                    hasFeedback
                    style={props.style}
                  >
                    {props.getFieldDecorator(props.seltype, selectJson)(
                      <Select mode={props.mode} style={{width:props.selWidth}} size="default" placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={(value,option) => {props.selChange(props.selType, value, props.defaultValue,option)}}>
                        {optionArr}
                      </Select>
                    )}
                  </FormItem>
    )
  }
  // 表单选框：区间选择库框
  function DoubleSelValid(props){
    var typeData = props.type,messageInfo=props.messageInfo,require=props.require,disable=props.seldisable,selectData1 = props.selectData1,selectData2 = props.selectData2;
  
    var optionArr1 = [],optionArr2 = [],defaultValue1 = "",defaultValue2 = "",type="",selectJson1={},selectJson2={};
    for (var key in selectData1) {
        type = key;
        defaultValue1 = selectData1[key].data.length!==0 ? selectData1[key].data[0].data : "";
        selectData1[key].data.forEach((item,index) => {
            var value = item.value;
            optionArr1.push(<Option value={value} title={item.data}>{item.data}</Option>);
        });
    }
    for (var key in selectData2) {
      type = key;
      defaultValue2 = selectData2[key].data.length!==0 ? selectData2[key].data[0].data : "";
      selectData2[key].data.forEach((item,index) => {
          var value = item.value;
          optionArr2.push(<Option value={value} title={item.data}>{item.data}</Option>);
      });
  }
    if(defaultValue1) {
        selectJson1 = {
            initialValue:defaultValue1,
            rules:[{required: require, message: messageInfo}]
        };
    } else {
        selectJson1 = {
            rules:[{required: require, message: messageInfo}]
        };
    }
    if(defaultValue2) {
      selectJson2 = {
          initialValue:defaultValue2,
          rules:[{required: require, message: messageInfo}]
      };
  } else {
      selectJson2 = {
          rules:[{required: require, message: messageInfo}]
      };
  }
    return (
      <FormItem
          {...formItemLayout}
          label={props.label}
          hasFeedback
          style={props.style}
        >
          {props.getFieldDecorator(props.seltype1, selectJson1)(
            <Select  className='l-form-lite' style={{"float":"left"}} placeholder={props.placeholder} onChange={(value,option) => {props.selChange(props.seltype1, value,option)}}>
              {optionArr1}
            </Select>
            
          )}
          <span style={{"float":"left","display":"block","margin":"0 9px"}}>-</span>
          {props.getFieldDecorator(props.seltype2, selectJson2)(
            <Select className='l-form-lite' placeholder={props.placeholder} onChange={(value,option) => {props.selChange(props.seltype2, value,option)}}>
              {optionArr2}
            </Select>
            
          )}
          
        </FormItem>
    )
  }

 function SingleSelection(props){
     const Option = Select.Option;
     let selectArry=props.selectArr.map((item,index)=>{
         return <Option value={item} key={index}>{item}</Option>
     })
     let defaultValue=props.defaultValue?props.defaultValue:(props.selectArr.length  > 0 ? props.selectArr[0] : null)
     return(
         <div className="y-singleselection-container">
            <label>{props.labelname}</label><Select style={props.selStyle} defaultValue={defaultValue}>{selectArry}</Select>
         </div>
     )
 } 

 function InputCnt(props){

     return(
        <div className="y-inputcnt-container" style={props.style}>
            <label style={{color:"rgba(0,0,0,0.85)",float:"left",lineHeight:"32px"}}>{props.labelname}</label><Input style={props.inputstyle} defaultValue={props.defaultValue} onChange={(e) =>{props.onInputChange(e)}} onPressEnter={(e) =>{props.pressEnter(e)}} placeholder={props.placeholder} />
         </div>
     )
 }


export {SearchInput,UploadFile,FromLine,MoreSelValid,DoubleSelValid,SingleSelection,InputCnt};