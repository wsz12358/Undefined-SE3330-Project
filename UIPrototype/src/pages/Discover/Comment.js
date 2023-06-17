import {Avatar, Form, Grid, Image, Input, List, Modal, Space, Tag} from "antd-mobile";
import {DeleteOutline, LikeOutline, MessageOutline, SendOutline} from "antd-mobile-icons";
import {Button} from "antd";
import "../../css/Discover.css"
import jntm from "../../assets/jntm.png"
import ava from "../../assets/miyu.jpg"
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";
import React, {useRef, useState} from "react";
import {addComment} from "../../service/loginService";
import {postRequest} from "../../utils/Ajax";

const renderThoughts = (msg, idx) => {
    if (msg.datatype === "img") return;
    return <ListItem key={idx}>
        {msg.message}
    </ListItem>
}

const renderImages = (img, idx) => {
    if (img.datatype === "msg") return;
    return <GridItem key={idx}>
        <Image src={img.message} width={100} height={100} fit='fill' onClick={() => {
            Modal.show({
                image: img.message,
                content: "Record",
                closeOnMaskClick: true,
                actions: []
            })
        }}/>
    </GridItem>
}

const renderComments = (cmt, idx) => {
    return <div className={"replyMessage"}>
        {cmt.user.nickname}: {cmt.comment}
    </div>
}
const deleteEvent = (id) => {
    const url = "http://localhost:8080/community/event/delete"
    const share_id = id.toString();
    console.log({sharedeventid: share_id});
    postRequest(url,
        {sharedeventid: share_id},
        (response) => {
            if (response.message === 'success') {
                // 如果删除成功，刷新页面
                //window.location.reload();
            } else {
                console.error('删除事件失败: ' + response.message);
            }
        },
        (error) => {
            console.error('发送请求失败: ', error);
        }
    );
};

const myAddComment = (cmt, sharedEventId, userId, refresh) => {
    const data = {comment: cmt, sharedeventid: sharedEventId, userid: userId};
    const callback = () => {
        refresh();
    };
    const errback = (e) => {console.log("add comment error:", e)};
    addComment(data, callback, errback);
}

const DiscoverCommentItem = (props) => {

    const commentRef = useRef()
    const [commenting, setCommenting] = useState(false);

    return (
        <div className='bottomLine'>
            <div className='oneEvent'>
                <div className="avatar">
                    <Avatar src={ava}/>
                </div>
                <div className="content">
                    <div className={"name"}>{props.name}</div>
                    <div className="share">
                        {props.messages.some(value => value.datatype === "msg") &&
                            <List>
                                {props.messages.map(renderThoughts)}
                            </List>
                        }
                        {props.messages.some(value => value.datatype === "img") &&
                            <Grid columns={3}>
                                {props.messages.map(renderImages)}
                            </Grid>
                        }
                    </div>
                    <div className={"locationAndFunc"}>
                        <div className={"location"}>
                            地点：美国
                        </div>
                        <div className='allFunc'>
                            <Button className={"func"} icon={<MessageOutline />} onClick={() => setCommenting(true)}></Button>
                            <Button className={"func"} icon={<DeleteOutline/>} onClick={() => deleteEvent(props.sharedEventId)}></Button>
                        </div>
                    </div>
                    {props.comments.length !== 0 && <div className={"comment"}>
                        {props.comments.map(renderComments)}
                    </div>}
                    {commenting && <Form name={"form"} layout={"horizontal"} onFinish={(v) => {
                        myAddComment(v.inputComment, props.sharedEventId, props.userId, props.refresh);
                        commentRef.current.clear();
                    }}>
                        <Form.Item name={"inputComment"}>
                            <Input ref={commentRef} placeholder={"请输入内容"} clearable onBlur={(e)=>{
                                if (e.target.value.trim() === '') setCommenting(false);
                            }}/>
                        </Form.Item>
                    </Form>}
                </div>
            </div>
        </div>
    )
}

export default DiscoverCommentItem