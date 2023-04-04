import React from 'react'
import './Mine.css'
import FocusUser from "../../utils/UserDemo";
import {List} from "antd-mobile";
import {SetOutline, TeamOutline} from "antd-mobile-icons";
import User from "./User";
import Login from "./Login";
import store from "../../redux/Store";

class Mine extends React.Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        })
    }

    render() {
        const login = store.getState().user.isLogin;
        return (
            <div style={{height: '100%', width: '100%'}}>
                {login &&
                    <User/>}
                {!login &&
                    <Login/>}
            </div>
        );
        //TODO: your code here
    }
}

export default Mine