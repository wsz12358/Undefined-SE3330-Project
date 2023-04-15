import avatar from "../../assets/miyu.jpg";
import r_avatar from "../../assets/naxida.png";
import React from "react";

const ChatMessage = (props) => {
    const {msg} = props;
    const t_avatar = msg.myType ? avatar : r_avatar;

    return (
        <div className="messageField"
             style={{
                 display: 'flex', flexDirection: msg.myType ? 'row-reverse' : 'row',
                 alignItems: 'center'
             }}>
            <img src={t_avatar} alt={msg.myType ? "avatar" : "r_avatar"}
                 style={{
                     borderRadius: '50%', width: 40,
                     height: 40, margin: '0 8px'
                 }}/>
            <div className="messageBox"
                 style={{
                     backgroundColor: msg.myType ? '#007bff' : '#e9e9e9',
                     color: msg.myType ? 'white' : 'black',
                     borderRadius: 10, padding: '8px 12px',
                     maxWidth: '60%', marginTop: 12,
                     marginBottom: 12, font: '400 20px/1.5 "Microsoft YaHei UI"'
                 }}>
                {msg.msgType === "msg" &&
                    <>{msg.message}</>}
                {msg.msgType === "img" &&
                    <img src={msg.message} style={{maxWidth: 200}}/>
                }
            </div>
        </div>
    )
};

export default ChatMessage;