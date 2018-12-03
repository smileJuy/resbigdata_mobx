import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import {observer,inject} from 'mobx-react';
import './index.css';

const FormItem = Form.Item;

 class NormalLoginForm  extends React.Component{
    constructor(props){
        super(props);
       this.state={
        userInfo:{}
       };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push('index')
          }
        });
      }
    change=(e,type)=>{
        let userInfo = this.state.userInfo;
        userInfo[type] = e.target.value;
        this.setState({
            userInfo:userInfo
        })
        this.props.userStore.fetchTodos(userInfo);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="y-login-form-container">
                <Form onSubmit={this.handleSubmit} className="login-form">
                <p className='login-title'>登 录</p>
                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账号!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" className='login-form-username' />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" className='login-form-password' />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox style={{marginLeft:"18px"}}>记住我</Checkbox>
                    )}
                    <Button onClick={this.login} type="primary" htmlType="submit" className="login-form-button">
                        登 录
                    </Button>
                    </FormItem>
                </Form>
            </div>
          
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm );

export default WrappedNormalLoginForm;