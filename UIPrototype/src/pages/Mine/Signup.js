import React from "react";
import OnClickRoute from "../../utils/OnClickRoute";
import HeaderBar from "../../components/HeaderBar";
import {Button, Card, Dialog, DotLoading, Form, Input} from "antd-mobile";
import {RightOutline} from "antd-mobile-icons";
import {call} from "moment";
import {register} from "../../service/loginService";
import {withRouter} from "react-router-dom";

class Signup extends React.Component {
    state = {
        waitSignup: false,
    }

    onFormFinish = (e) => {
        const history = this.props.history;
        const callback = (data) => {
            if (data.message === "U_EXIST") {
                Dialog.alert({
                    content: "Username already exists."
                });
            } else if (data.message === "SUCCESS") {
                Dialog.show({
                        content: "Signup success.",
                        closeOnAction: true,
                        actions: [[
                            {key: 'confirm', text: '确认'},
                        ]],
                        onAction: () => {
                            history.replace('/mine/login', {username: e.username, password: e.password});
                        }
                    }
                );
            }
        }

        register({
            username: e.username,
            password: e.password,
            usertype: "typical",
        }, callback);
    }

    pwdValidator = (rule, value, callback) => {
        if (value !== this.form.getFieldValue('password')) {
            callback("Inconsistent password.");
        } else callback();
    }

    render() {
        return (
            <div id="signup"
                 style={{height: '100%'}}>
                <div id="signup_headerField">
                    <HeaderBar backFunc={OnClickRoute.bind(this, "", "pop")}
                               title='注册'/>
                </div>
                <div id="signup_body">
                    <Card style={{
                        width: '90%', backgroundColor: 'rgba(255, 255, 255, .8)',
                        paddingLeft: '40px'
                    }}>
                        <Form layout='vertical'
                              onFinish={this.onFormFinish}
                              style={{width: '90%'}}
                              ref={e => this.form = e}
                              footer={
                                  <>
                                      <Button block type='login' color='primary' size='large'>
                                          {this.state.waitSignup &&
                                              <div>
                                                  Loading <DotLoading color='white'/>
                                              </div>}
                                          {!this.state.waitSignup &&
                                              "Sign up"}
                                      </Button>
                                  </>
                              }
                        >
                            <Form.Header>Sign up</Form.Header>
                            <Form.Item name='username'
                                       label='Username'
                                       rules={[{required: true, message: 'username must not be null'}]}>
                                <Input clearable/>
                            </Form.Item>
                            <Form.Item name='password'
                                       label='Password'
                                       rules={[{required: true}]}>
                                <Input clearable type='password'/>
                            </Form.Item>
                            <Form.Item name='cnf_password'
                                       label='Confirm Password'
                                       rules={[
                                           {required: true},
                                           {validator: this.pwdValidator},
                                       ]}>
                                <Input clearable type='password'/>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);