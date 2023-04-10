import React from "react";
import {Tabs} from "antd-mobile";

export default function FriendTabs(props) {
    return (
        <div id="friendTabs">
            <Tabs onChange={(e) => {
                props.setState({activeKey: e});
            }}
                  activeKey={props.activeKey}>
                <Tabs.Tab title="我的好友" key="myFriends"/>
                <Tabs.Tab title="添加好友" key="addFriends"/>
            </Tabs>
        </div>
    )
}