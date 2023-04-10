import React from "react";
import friendsDemo from "../../utils/FriendsDemo"
import {Image, List, SearchBar} from "antd-mobile";

class Mine_FriendList extends React.Component {
    render() {
        return (
            <div id="mine_friendList">
                <List>
                    {friendsDemo.map(user => {
                        if (user.name.toLowerCase().includes(this.props.filter.toLowerCase()))
                            return (
                                <List.Item
                                    key={user.name}
                                    style={{fontSize: 23}}
                                    prefix={
                                        <Image src={user.avatar}
                                               style={{borderRadius: 30}}
                                               fit='cover'
                                               width={60}
                                               height={60}/>
                                    }
                                    description={user.facade_memo}>
                                    {user.name}
                                </List.Item>
                            )
                    })}
                </List>
            </div>
        )
    }
}

export default Mine_FriendList;