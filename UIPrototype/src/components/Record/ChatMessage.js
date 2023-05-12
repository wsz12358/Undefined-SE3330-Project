import avatar from "../../assets/miyu.jpg";
import r_avatar from "../../assets/naxida.png";
import React from "react";
import moment from 'moment'
import "../../css/ChatMessage.css"
import {Image, SpinLoading} from "antd-mobile";

const ChatMessage = (props) => {
    const {msg} = props;
    const {message, msgType, timestamp} = msg; // Destructure the 'msg' object
    const myType = (msgType !== "system");
    const t_avatar = myType ? avatar : r_avatar;

    const formattedTime = moment(timestamp).format('HH:mm:ss');
    return (
        <div id="message_field">
            <div className="time_tag" style={{textAlign: 'center'}}>{formattedTime}</div>

            <div className="message_area"
                 style={{flexDirection: myType ? 'row-reverse' : 'row'}}>
                <img className="message_avatar"
                     src={t_avatar}
                     alt={myType ? "avatar" : "r_avatar"}/>

                <div className="message_box"
                     style={{
                         backgroundColor: myType ? '#007bff' : '#e9e9e9',
                         color: myType ? 'white' : 'black',
                         marginLeft: myType ? '0' : '52px', marginRight: myType ? '52px' : '0'
                     }}>
                    {(msgType === "msg" || msgType === "system") &&
                        <>{message}</>}
                    {msgType === "img" &&
                        <Image src={message} style={{maxWidth: 200}}/>}
                    {msgType === "pend" &&
                        <SpinLoading/>}
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;
