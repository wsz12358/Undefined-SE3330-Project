import React from "react";
import {Button, Card, Dialog, Form, Input} from "antd-mobile";
import store from "../../redux/Store";
import {setIsLogin, setUsername} from "../../redux/FilterActions";
import {username, password} from "../../utils/LoginDemo";
import user from "./User";


class Login extends React.Component {
    onFinish = (e) => {
        if (e.username === username && e.password === password) {
            const u = e.username.toString();
            Dialog.alert({
                content: "Welcome! Dear " + u + ".",
            });
            store.dispatch(setIsLogin(true));
            store.dispatch(setUsername(e.username));
            // password shall not be stored in Front
            // if access to password is required, program should fetch from Backend
        } else {
            Dialog.alert({
                content: "Wrong username or password",
            });
        }
    }

    render() {
        return (
            <div id="login_body">
                <Card style={{
                    width: '90%', backgroundColor: 'rgba(255, 255, 255, .8)',
                    paddingLeft: '40px'
                }}>
                    <Form layout='vertical'
                          onFinish={this.onFinish}
                          style={{width: '90%'}}
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
                        <Form.Item name='password'
                                   label='Password'>
                            <Input clearable type='password'/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;