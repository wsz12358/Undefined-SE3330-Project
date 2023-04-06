import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import './Details.css'

import {Badge, Button, Collapse, Image, List, Tag} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {AddCircleOutline, ClockCircleOutline, EnvironmentOutline, EyeOutline, UserOutline} from "antd-mobile-icons";
import eventListDemo from "../../utils/EventListDemo";
import {ListItem} from "antd-mobile/es/components/list/list-item";


const allThoughts = ["全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music",
    "🐔👈，🗿⬇️☯️😋",
    "🤮👶，🗿⬇️🗿☯️😋",
    "🌸1️⃣👀🍺👌💥",
    "🥇🤏🥢🥃"
]

const allPictures = []

class Details extends React.Component {

    backAddr = "/stats"
    eventId = this.props.location.state.id - 1
    focusEvent = eventListDemo[this.eventId]

    btnShare = (
        <button className="btnShare">
            分享
        </button>
    );

    renderThoughts = (value) => {
        return (
            <div className="thought">
                {value}
            </div>
        )
    }

    renderPictures = () => {

    }

    render() {
        return (<div className="detail_body">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr, "pop")} title="详细"/>
            </div>

            <div className="detail_eventField">
                <div className="deTitle">
                    This is event {this.focusEvent.key}.
                </div>
                <div className='deTime'>
                    {this.focusEvent.date} 2023
                </div>

                {/*<div className='deTag'>*/}
                {/*    <Tag color='primary' className='chTag'>唱</Tag>*/}
                {/*    <Tag color='blue' className='chTag'>跳</Tag>*/}
                {/*    <Tag color='red' className='chTag'>rap</Tag>*/}
                {/*    <Tag color='green' className='chTag'>篮球</Tag>*/}
                {/*</div>*/}

                <Collapse defaultActiveKey={['1']} className="myCollapse">
                    <Collapse.Panel key='感想' title='感想' className="myCollapsePanel">
                        {
                            <div className='allThoughts'>
                                {allThoughts.map(this.renderThoughts)}
                            </div>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='图片' title='图片' className="myCollapsePanel">
                        {
                            <div className='allPictures'>
                                <div className='picture'>
                                    <Badge content='-' className='removeContent'>
                                        <Image src={jntm} width={100} height={100} fit='fill'/>
                                    </Badge>
                                </div>
                                <div className='picture'>
                                    <Badge content='-' className='removeContent'>
                                        <Image src={jntm} width={100} height={100} fit='fill'/>
                                    </Badge>
                                </div>
                                <div className='addPicture'>
                                    <AddCircleOutline className='addCircle'/>
                                </div>
                            </div>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='tag' title='tag' className="myCollapsePanel">
                        {
                            <div className="allTags">
                                <div className="deTag">
                                    吃饭
                                </div>
                                <div className="deTag">
                                    睡觉
                                </div>
                                <div className="deTag">
                                    打篮球
                                </div>

                            </div>
                        }
                    </Collapse.Panel>
                </Collapse>

                <List>
                    <ListItem prefix={<EnvironmentOutline />} onClick={()=>{}}>所在位置</ListItem>
                    <ListItem prefix={<EyeOutline />} onClick={()=>{}}>谁可以看</ListItem>
                    <ListItem prefix={<UserOutline />} onClick={()=>{}}>提醒谁看</ListItem>
                    <ListItem prefix={<ClockCircleOutline />} onClick={()=>{}}>定时</ListItem>
                </List>

            </div>
        </div>);
    }
}

export default Details