import {Avatar, Grid, Image, List, Modal, Space, Tag} from "antd-mobile";
import {DeleteOutline, LikeOutline, MessageOutline, SendOutline} from "antd-mobile-icons";
import "../../css/Discover.css"
import jntm from "../../assets/jntm.png"
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";

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

const DiscoverCommentItem = (props) => {
    return (
        <div className='bottomLine'>
            <div className='oneEvent'>
                <div className="avatar">
                    <Avatar src={jntm}/>
                </div>
                <div className="content">
                    <div className={"name"}>{props.name}</div>
                    <div className="share">
                        {/*全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music*/}
                        {/*{props.messages.map()}*/}
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
                        {/*region allFunc*/}
                        <div className='allFunc'>
                            {/*<div className={"func"}>
                                <LikeOutline/>
                            </div>*/}
                            <div className={"func"}>
                                <MessageOutline/>
                            </div>
                            {/*<div className={"func"}>
                                <SendOutline/>
                            </div>*/}
                            <div className={"func"}>
                                <DeleteOutline/>
                            </div>
                        </div>
                        {/*endregion*/}
                    </div>
                    {/*region comment*/}
                    {/*<div className={"comment"}>*/}
                    {/*    /!*<div className={"likePeople"}>*!/*/}
                    {/*    /!*    <LikeOutline/>*!/*/}
                    {/*    /!*    纯鹿仁*!/*/}
                    {/*    /!*    梅素汁*!/*/}
                    {/*    /!*    共2人点赞*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    <div className={"reply"}>*/}
                    {/*        <div className={"replyMessage"}>*/}
                    {/*            纯鹿仁：哈哈*/}
                    {/*        </div>*/}
                    {/*        <div className={"replyMessage"}>*/}
                    {/*            梅素汁：嘿嘿*/}
                    {/*        </div>*/}
                    {/*        <div className={"replyMessage"}>*/}
                    {/*            贞癌坟回复纯鹿仁：食不食油饼,拿什么荔枝*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*endregion*/}
                </div>
            </div>
        </div>
    )
}

export default DiscoverCommentItem