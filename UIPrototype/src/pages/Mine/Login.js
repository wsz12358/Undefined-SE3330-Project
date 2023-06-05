import React from "react";
import {Button, Card, Dialog, DotLoading, Form, Input} from "antd-mobile";
import store from "../../redux/Store";
import {setIsLogin, setUserId, setUsername} from "../../redux/FilterActions";
import {login} from "../../service/loginService";
import {RightOutline} from "antd-mobile-icons";
import OnClickRoute from "../../utils/OnClickRoute";
import {withRouter} from "react-router-dom";


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
                store.dispatch(setUserId(ret.userId));
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
                              <>
                                  <Button block type='login' color='primary' size='large'>
                                      {this.state.waitLogin &&
                                          <div>
                                              Loading <DotLoading color='white'/>
                                          </div>}
                                      {!this.state.waitLogin &&
                                          "Login"}
                                  </Button>
                                  <Button block color='primary' fill='outline' size='large'
                                          style={{marginTop: '20px'}}
                                            onClick={OnClickRoute.bind(this, "/mine/signup", "push")}>
                                      <div>
                                          Sign Up <RightOutline/>
                                      </div>
                                  </Button>
                              </>
                          }
                    >
                        <Form.Header>Login</Form.Header>
                        <Form.Item name='username'
                                   label='Username'
                                   initialValue={this.props.location.state === undefined ?
                                       "group7" : this.props.location.state.username}
                                   rules={[{required: true, message: 'username must not be null'}]}>
                            <Input clearable/>
                        </Form.Item>
                        <Form.Item name='password'
                                   label='Password'
                                   initialValue={this.props.location.state === undefined ?
                                       "sjtuse2021" : this.props.location.state.password}>
                            <Input clearable type='password'/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login);