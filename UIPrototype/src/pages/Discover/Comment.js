import {Avatar, Form, Grid, Image, Input, List, Modal, Popover, Space, Tag} from "antd-mobile";
import {DeleteOutline, LikeOutline, MessageOutline, SendOutline} from "antd-mobile-icons";
import {Button} from "antd";
import "../../css/Discover.css"
import jntm from "../../assets/jntm.png"
import ava from "../../assets/miyu.jpg"
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";
import React, {useEffect, useRef, useState} from "react";
import {addComment, deleteComment} from "../../service/loginService";
import {postRequest} from "../../utils/Ajax";
import BMap from 'BMap';

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

const getAddress = (lat, mul, refresh) => {
    const map = new BMap.Map("l-map");
    let address = "";
// 创建地理编码实例, 并配置参数获取乡镇级数据
    const myGeo = new BMap.Geocoder({extensions_town: true});
// 根据坐标得到地址描述
    myGeo.getLocation(new BMap.Point(mul, lat), function(result){
        if (result){
            console.log(result.address);
            address = result.address;
            // refresh();
        }
    });
    return address
}


const deleteEvent = (id, refresh) => {
    const url = "http://localhost:8080/community/event/delete"
    const share_id = id.toString();
    console.log({sharedeventid: share_id});
    postRequest(url,
        {sharedeventid: share_id},
        (response) => {
            if (response.message === 'success') {
                // 如果删除成功，刷新页面
                //window.location.reload();
                refresh();
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

const myDeleteComment = (commentId, refresh) => {
    const data = {commentid:commentId}
    const callback = (res) => {
        console.log(res);
        refresh();
    }
    const errback = (e) => {console.log("delete comment error:", e)}
    deleteComment(data, callback, errback);
}

const DiscoverCommentItem = (props) => {

    const commentRef = useRef()
    const [commenting, setCommenting] = useState(false);
    const [Location, setLocation] = useState("");

    useEffect(()=>{
        const map = new BMap.Map("l-map");
// 创建地理编码实例, 并配置参数获取乡镇级数据
        const myGeo = new BMap.Geocoder({extensions_town: true});
// 根据坐标得到地址描述
        myGeo.getLocation(new BMap.Point(props.mul, props.lat), function(result){
            if (result){
                console.log(result.address);
                setLocation(result.address);
            }
        });
    },[])

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
                            地点：{Location}
                        </div>
                        <div className='allFunc'>
                            <Button className={"func"} icon={<MessageOutline/>} onClick={() => setCommenting(true)}/>
                            {props.sharedEventUserId === props.userId && <Button className={"func"} icon={<DeleteOutline/>} onClick={async () => {
                                const res = await Modal.confirm({content: "确定要删除吗？"})
                                if (res) deleteEvent(props.sharedEventId, props.refresh)
                            }}/>}
                        </div>
                    </div>
                    {props.comments.length !== 0 && <div className={"comment"}>
                        {props.comments.map((cmt, idx) => {
                            if (cmt.user.userId.toString() !== props.userId)
                            return <div className={"replyMessage"}>
                                {cmt.user.nickname}: {cmt.comment}
                            </div>
                            else
                                return <Popover content={<Button onClick={async ()=>{
                                    const res = await Modal.confirm({content: "确定要删除吗？"})
                                    if (res) myDeleteComment(cmt.commentId, props.refresh);
                                }
                                }>删除</Button>} trigger={'click'}>
                                    <div className={"replyMessage"}>
                                        {cmt.user.nickname}: {cmt.comment}
                                    </div>
                            </Popover>
                        })}
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