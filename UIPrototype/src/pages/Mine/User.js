import React from "react";
import {Dialog, List} from "antd-mobile";
import {SetOutline, TeamOutline} from "antd-mobile-icons";
import {setIsLogin} from "../../redux/FilterActions";
import store from "../../redux/Store";
import OnClickRoute from "../../utils/OnClickRoute";
import {withRouter} from "react-router-dom";

class User extends React.Component {
    render() {
        return (
            <div className='user_body'>
                <div className="user_avatarField">
                    <div className="user_avatarBox"/>
                    <div className="user_nameBox">
                        {store.getState().user.username}
                    </div>
                    <div className="user_idBox">
                        id: 12138
                    </div>
                </div>
                <List className="user_setList">
                    <List.Item prefix={<TeamOutline/>} onClick={OnClickRoute.bind(this, "/mine/friends", "push")}>
                        好友
                    </List.Item>
                    <List.Item prefix={<SetOutline/>} onClick={() => {
                    }}>
                        设置
                    </List.Item>
                </List>
                <List className="user_logout">
                    <List.Item onClick={() => {
                        Dialog.show({
                            content: '确认要退出登录吗？',
                            closeOnAction: true,
                            actions: [[
                                {key: 'cancel', text: '取消'},
                                {key: 'confirm', text: '确认', bold: true, danger: true,},
                            ]],
                            onAction: (e) => {
                                if (e.key === 'confirm')
                                    store.dispatch(setIsLogin(false));
                            }
                        })
                    }}>
                        退出登录
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default withRouter(User);