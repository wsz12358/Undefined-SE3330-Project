import avatar from "../../assets/miyu.jpg";
import r_avatar from "../../assets/naxida.png";
import React from "react";
import moment from 'moment'
import "../../css/ChatMessage.css"
const ChatMessage = (props) => {
    const { msg } = props;
    const { myType, message, msgType, timestamp } = msg; // Destructure the 'msg' object
    const t_avatar = myType ? avatar : r_avatar;

    const formattedTime = moment(timestamp).format('HH:mm:ss');
    return (
        <div className="messageField"
             style={{
                 display: 'flex', flexDirection: 'column', width: '100%'
             }}>
            <div className="time-tag" style={{ textAlign: 'center' }}>{formattedTime}</div>
            <div style={{
                display: 'flex', flexDirection: myType ? 'row-reverse' : 'row', alignItems: 'flex-start',
                position: 'relative'
            }}>
                <img src={t_avatar} alt={myType ? "avatar" : "r_avatar"}
                     style={{
                         borderRadius: '50%', width: 40,
                         height: 40, margin: '0 4px',
                         maxWidth: '60%', position: 'absolute', top: 0
                     }}/>
                <div className="messageBox"
                     style={{
                         backgroundColor: myType ? '#007bff' : '#e9e9e9',
                         color: myType ? 'white' : 'black',
                         borderRadius: 10, padding: '8px 12px',
                         maxWidth: '80%', marginTop: 12,
                         marginBottom: 12, font: '400 20px/1.5 "Microsoft YaHei UI"',
                         marginLeft: myType ? '0' : '52px', marginRight: myType ? '52px' : '0'
                     }}>
                    {msgType === "msg" &&
                        <>{message}</>}
                    {msgType === "img" &&
                        <img src={message} style={{maxWidth: 200}}/>
                    }
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;
