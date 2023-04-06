import React from 'react'
import './Home.css'
import {Button} from 'antd-mobile'
import {AddOutline, UndoOutline} from "antd-mobile-icons";
import Timer from "../../utils/Timer";
import OnClickRoute from "../../utils/OnClickRoute";
import FocusUser from "../../utils/UserDemo";
import store from "../../redux/Store";
import avatar from "../../assets/miyu.jpg";
import nullAvatar from "../../assets/null_avatar.png";

class Home extends React.Component {
    state = {
        showsDate: true,
        isLogin: store.getState().user.isLogin
    }

    goAddr = '/mine'
    recordAddr = '/home/record'

    onTagBtnClick = () => {
        if (this.state.isLogin)
            this.setState({showsDate: !this.state.showsDate});
    }

    onRecordBtnClick = () => {
        if (this.state.isLogin)
            this.props.history.push(this.recordAddr);
    }

    renderDate = () => {
        if (this.state.showsDate) {
            return (
                <div id="home_noteBox">
                    {this.state.isLogin && FocusUser.facade_memo}
                    {!this.state.isLogin && "Please go login."}
                </div>
            )
        } else {
            return (
                <div id="home_dateBox">
                    Dec. 31
                </div>
            )
        }
    }

    render() {
        return (
            <div id="home_body">
                <div id="home_avatarField">
                    ProLiferate
                    <div id="home_avatar"
                         onClick={OnClickRoute.bind(this, this.goAddr, "push")}>
                        <img alt="avatar"
                             src={this.state.isLogin ? avatar : nullAvatar}
                             height="100%" width="100%"/>
                    </div>
                </div>
                <div id="home_frontField">
                    <div id="home_frontBox">
                        <div id="home_timeBox">
                            <Timer/>
                        </div>
                        {this.renderDate()}
                    </div>
                    <Button className="home_tagBtn" shape='rounded' onClick={this.onTagBtnClick}>
                        <UndoOutline fontSize={18}/>
                    </Button>
                    <div id="home_countBox">
                        {this.state.isLogin && "本月已记录10次"}
                        {!this.state.isLogin && "请进行登录"}
                    </div>
                    <Button className="home_startBtn" size='large'
                            fill='solid' color='primary'
                            onClick={this.onRecordBtnClick}>
                        <AddOutline fontSize={30}/>
                    </Button>
                </div>
            </div>);
        //TODO: your code here
    }
}

export default Home