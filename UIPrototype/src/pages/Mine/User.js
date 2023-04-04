import React from "react";
import FocusUser from "../../utils/UserDemo";
import {List} from "antd-mobile";
import {SetOutline, TeamOutline} from "antd-mobile-icons";
import {setIsLogin} from "../../redux/FilterActions";
import store from "../../redux/Store";

class User extends React.Component {
    render() {
        return(
            <div className='mine_body'>
                <div className="mine_avatarField">
                    <div className="mine_avatarBox"/>
                    <div className="mine_nameBox">
                        {FocusUser.name}
                    </div>
                    <div className="mine_idBox">
                        id: {FocusUser.id}
                    </div>
                </div>
                <List className="mine_setList">
                    <List.Item prefix={<TeamOutline/>} onClick={() => {}}>
                        好友
                    </List.Item>
                    <List.Item prefix={<SetOutline/>} onClick={() => {}}>
                        设置
                    </List.Item>
                </List>
                <List className="mine_logout">
                    <List.Item onClick={() => {
                        store.dispatch(setIsLogin(false));
                    }}>
                        退出登录
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default User;