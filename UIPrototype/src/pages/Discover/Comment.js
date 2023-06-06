import {Avatar, Form, Grid, Image, Input, List, Modal, Space, Tag} from "antd-mobile";
import {DeleteOutline, LikeOutline, MessageOutline, SendOutline} from "antd-mobile-icons";
import {Button} from "antd";
import "../../css/Discover.css"
import jntm from "../../assets/jntm.png"
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
                content: "jntm",
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

const myAddComment = (cmt, sharedEventId, userId) => {
    const data = {comment: cmt, sharedeventid: sharedEventId, userid: userId};
    const callback = () => {};
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
                    <Avatar src={jntm}/>
                </div>
                <div className="content">
                    <div className={"name"}>{props.name}</div>
                    {/*region share*/}
                    <div className="share">
                        {/*全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music*/}
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
                    {/*endregion*/}
                    <div className={"locationAndFunc"}>
                        <div className={"location"}>
                            地点：美国
                        </div>
                        {/*region allFunc*/}
                        <div className='allFunc'>
                            {/*<div className={"func"}>
                                <LikeOutline/>
                            </div>*/}
                            {/*<div className={"func"}>
                                <SendOutline/>
                            </div>*/}
                            <Button className={"func"} icon={<MessageOutline />} onClick={() => setCommenting(true)}></Button>
                            <Button className={"func"} icon={<DeleteOutline/>} onClick={() => deleteEvent(props.sharedEventId)}></Button>
                        </div>
                        {/*endregion*/}
                    </div>
                    {/*region comment*/}
                    <div className={"comment"}>
                        {/*<div className={"likePeople"}>*/}
                        {/*    <LikeOutline/>*/}
                        {/*    纯鹿仁*/}
                        {/*    梅素汁*/}
                        {/*    共2人点赞*/}
                        {/*</div>*/}
                        {/*<div className={"reply"}>*/}
                        {/*    <div className={"replyMessage"}>*/}
                        {/*        纯鹿仁：哈哈*/}
                        {/*    </div>*/}
                        {/*    <div className={"replyMessage"}>*/}
                        {/*        梅素汁：嘿嘿*/}
                        {/*    </div>*/}
                        {/*    <div className={"replyMessage"}>*/}
                        {/*        贞癌坟回复纯鹿仁：食不食油饼,拿什么荔枝*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*endregion*/}
                    {props.comments.length !== 0 && <div className={"comment"}>
                        {props.comments.map(renderComments)}
                    </div>}
                    {/*region new comment*/}
                    {commenting && <Form name={"form"} layout={"horizontal"} onFinish={(v) => {
                        myAddComment(v.inputComment, props.sharedEventId, props.userId);
                        commentRef.current.clear();
                    }}>
                        <Form.Item name={"inputComment"}>
                            <Input ref={commentRef} placeholder={"请输入内容"} clearable onBlur={(e)=>{
                                if (e.target.value.trim() === '') setCommenting(false);
                            }}/>
                        </Form.Item>
                    </Form>}
                    {/*    endregion*/}
                </div>
            </div>
        </div>
    )
}

export default DiscoverCommentItem