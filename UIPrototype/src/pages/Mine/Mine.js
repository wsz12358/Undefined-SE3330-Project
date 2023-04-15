import React from 'react'
import '../../css/Mine.css'
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
            <div id="mine_body">
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