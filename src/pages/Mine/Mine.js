import React from 'react'
import './Mine.css'
import FocusUser from "../../utils/UserDemo";
import {List} from "antd-mobile";
import {SetOutline, TeamOutline} from "antd-mobile-icons";

class Mine extends React.Component {
    render() {
        return (<div className='mine_body'>
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
                <List.Item onClick={() => {}}>
                    退出登录
                </List.Item>
            </List>
        </div>);
        //TODO: your code here
    }
}

export default Mine