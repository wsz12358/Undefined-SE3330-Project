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
            console.log(ret);
            if (ret) {
                const u = e.username.toString();
                Dialog.alert({
                    content: "欢迎！亲爱的 " + u + "。",
                });
                store.dispatch(setIsLogin(true));
                store.dispatch(setUsername(e.username));
                store.dispatch(setUserId(ret.userId));
                // password shall not be stored in Front
                // if access to password is required, program should fetch from Backend
            } else {
                Dialog.alert({
                    content: "用户名或密码错误",
                });
                this.setState({waitLogin: false})
            }
        }

        const errback = (e) => {
            console.log(e);
            Dialog.alert({
                content: "用户名或密码错误",
            });
            this.setState({waitLogin: false})
        }

        this.setState({waitLogin: true});
        login({username: e.username, password: e.password}, callback, errback);
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
                                              加载中 <DotLoading color='white'/>
                                          </div>}
                                      {!this.state.waitLogin &&
                                          "登录"}
                                  </Button>
                                  <Button block color='primary' fill='outline' size='large'
                                          style={{marginTop: '20px'}}
                                            onClick={OnClickRoute.bind(this, "/mine/signup", "push")}>
                                      <div>
                                          注册 <RightOutline/>
                                      </div>
                                  </Button>
                              </>
                          }
                    >
                        <Form.Header>登录</Form.Header>
                        <Form.Item name='username'
                                   label='用户名'
                                   initialValue={this.props.location.state === undefined ?
                                       "group7" : this.props.location.state.username}
                                   rules={[{required: true, message: '用户名不能为空'}]}>
                            <Input clearable/>
                        </Form.Item>
                        <Form.Item name='password'
                                   label='密码'
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