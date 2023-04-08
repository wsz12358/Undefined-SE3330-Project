import React from "react";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import FriendTabs from "../../components/Friend/FriendTabs";
import Mine_FriendList from "./Mine_FriendList";

class Mine_Friends extends React.Component {
    state = {
        activeKey: "myFriends"
    }

    tabRender = () => {
        if (this.state.activeKey === "myFriends")
            return (
                <Mine_FriendList/>
            )
        else if (this.state.activeKey === "addFriends")
            return (
                "bb"
            )
    }

    render() {
        return (
            <div id="friend_body">
                <div id="friend_absoluteField">
                    <div id="friend_headerField"
                         style={{width: '100%'}}>
                        <HeaderBar backFunc={OnClickRoute.bind(this, "", "pop")}
                                   title='好友'/>
                    </div>
                    <div id="friend_tabField" className="alpha_bg"
                         style={{width: '100%', padding: '10px 0'}}>
                        <FriendTabs activekey={this.state.activeKey}
                                    setState={(e) => this.setState(e)}/>
                    </div>
                </div>
                <div id="friend_content" className="alpha_bg">
                    {this.tabRender()}
                </div>
            </div>
        )
    }
}

export default Mine_Friends;