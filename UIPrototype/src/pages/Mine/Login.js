import React from "react";
import {Button, Card, Dialog, DotLoading, Form, Input} from "antd-mobile";
import store from "../../redux/Store";
import {setIsLogin, setUsername} from "../../redux/FilterActions";
import {login} from "../../service/loginService";


class Login extends React.Component {
    state = {
        waitLogin: false
    }
    onFinish = (e) => {
        const callback = (ret) => {
            if (ret) {
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
                this.setState({waitLogin: false})
            }
        }

        this.setState({waitLogin: true});
        login({username: e.username, password: e.password}, callback,
            () => this.setState({waitLogin: false}));
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
                                  {this.state.waitLogin &&
                                      <div>
                                          Loading <DotLoading color='white'/>
                                      </div>}
                                  {!this.state.waitLogin &&
                                      "Login"}
                              </Button>
                          }
                    >
                        <Form.Header>Login</Form.Header>
                        <Form.Item name='username'
                                   label='Username'
                                   initialValue='group7'
                                   rules={[{required: true, message: 'username must not be null'}]}>
                            <Input clearable/>
                        </Form.Item>
                        <Form.Item name='password'
                                   label='Password'
                                   initialValue='sjtuse2021'>
                            <Input clearable type='password'/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;