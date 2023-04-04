import React from "react";
import {Button, Dialog, Form, Input} from "antd-mobile";
import store from "../../redux/Store";
import {setIsLogin} from "../../redux/FilterActions";


class Login extends React.Component {
    onFinish = (e) => {
        if (e.username === 'i' && e.password === 'i') {
            store.dispatch(setIsLogin(true));
        } else {
            Dialog.alert({
                content: "Wrong username or password",
            });
        }
    }

    render() {
        return (
            <Form layout='vertical'
                  onFinish={this.onFinish}
                  footer={
                      <Button block type='login' color='primary' size='large'>
                          Login
                      </Button>
                  }
            >
                <Form.Header>Login</Form.Header>
                <Form.Item name='username'
                           label='Username'
                           rules={[{required: true, message: 'username must not be null'}]}>
                    <Input clearable/>
                </Form.Item>
                <Form.Item name='password' label='Password'>
                    <Input clearable type='password'/>
                </Form.Item>
            </Form>
        )
    }
}

export default Login;