import React from "react";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import {Tabs} from "antd-mobile";

class Mine_Friends extends React.Component {
    state = {
        activeKey: "myFriends"
    }

    render() {
        return (
            <div id="friend_body">
                <div id="friend_absolute">
                    <div id="friend_header"
                         style={{width: '100%'}}>
                        <HeaderBar backFunc={OnClickRoute.bind(this, "", "pop")}
                                   title='好友'/>
                    </div>
                    <div id="friend_tab">
                        <Tabs onChange={(e) => {
                            this.setState({activeKey: e});
                        }}
                              activeKey={this.state.activeKey}>
                            <Tabs.Tab title="我的好友" key="myFriends"/>
                            <Tabs.Tab title="添加好友" key="addFriends"/>
                        </Tabs>
                    </div>
                </div>
                <div id="friend_content">
                </div>
            </div>
        )
    }
}

export default Mine_Friends;