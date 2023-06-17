import React from 'react'
import "../../css/Discover.css"
import DiscoverCommentItem from "./Comment";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import {Image} from "antd-mobile";
import sea from "../../assets/sea.jpg"
import {getSharedEvents} from "../../service/loginService";
import store from "../../redux/Store";

class Discover extends React.Component {

    getSharedEvents = () => {
        const callback = (res) => {
            this.setState({shareEvents: res})
        }
        const errback = (e) => {
            console.log("get shared events error:", e);
        }
        getSharedEvents({}, callback, errback);
    }

    constructor(props) {
        super(props);
        this.state = {shareEvents: []}
        this.getSharedEvents();
    }

    backAddr = '/home'

    renderCommentItem = (singleItem, idx) => {
        const name = singleItem.event.user.nickname;
        const messages = singleItem.event.messages;
        const lat = singleItem.event.lat;
        const mul = singleItem.event.mul;
        const comments = singleItem.comments;
        const userID = store.getState().user.userid.toString();
        const sharedEventId = singleItem.sharedeventId;
        const sharedEventUserId = singleItem.event.user.userId.toString();
        return <DiscoverCommentItem sharedEventId={sharedEventId}
                                    userId={userID} name={name}
                                    messages={messages}
                                    lat={lat} mul={mul}
                                    comments={comments} key={idx}
                                    sharedEventUserId = {sharedEventUserId}
                                    refresh={this.getSharedEvents.bind(this)}/>
    }

    render() {
        return (<div className="discuv_body">
            <div className="discuv_head">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr, "pop")} title="发现"/>
            </div>
            <div className="discuv_field">
                <Image src={sea} style={{width: '100%', objectFit: 'contain'}}/>
                <div className='aaa'>
                    {this.state.shareEvents.map(this.renderCommentItem)}
                </div>
                <div className="foot">
                    已经到底啦
                </div>
            </div>
        </div>);
    }
}

export default Discover