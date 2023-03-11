import {Avatar, Button, Space, Tag, TextArea} from "antd-mobile";
import {LikeOutline, MessageOutline, SendOutline} from "antd-mobile-icons";
import "./Discover.css"

const DiscoverCommentList = () => {
    return (
        <div className='bottomLine'>
            <div className='oneEvent'>
                <Space className="avatarAndTag">
                    <Avatar src=''/>
                    <Tag color={"primary"}>
                        跳舞
                    </Tag>
                </Space>
                <div className="share">
                    全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music
                </div>
                <div className={"locationAndFunc"}>
                    <div className={"location"}>
                        地点：美国
                    </div>
                    <div className='allFunc'>
                        <div className={"func"}>
                            <LikeOutline/>
                        </div>
                        <div className={"func"}>
                            <MessageOutline/>
                        </div>
                        <div className={"func"}>
                            <SendOutline/>
                        </div>
                    </div>
                </div>
                <div className={"comment"}>
                    <div className={"likePeople"}>
                        <LikeOutline/>
                        纯鹿仁
                        梅素汁
                        共2人点赞
                    </div>
                    <div className={"reply"}>
                        <div className={"replyMessage"}>
                            纯鹿仁：哈哈
                        </div>
                        <div className={"replyMessage"}>
                            梅素汁：嘿嘿
                        </div>
                        <div className={"replyMessage"}>
                            贞癌坟回复纯鹿仁：食不食油饼,拿什么荔枝
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverCommentList