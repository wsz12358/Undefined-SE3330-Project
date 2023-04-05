import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import './Details.css'

import {Badge, Button, Collapse, Image, Tag} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {AddCircleOutline} from "antd-mobile-icons";
import eventListDemo from "../../utils/EventListDemo";


const allThoughts = ["全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music",
    "🐔👈，🗿⬇️☯️😋",
    "🤮👶，🗿⬇️🗿☯️😋",
    "🌸1️⃣👀🍺👌💥",
    "🥇🤏🥢🥃"
]

class Details extends React.Component {

    backAddr = "/stats"
    eventId = this.props.location.state.id - 1
    focusEvent = eventListDemo[this.eventId]

    renderThoughts = (value) => {
        return (
            <div className="thought">
                {value}
            </div>
        )
    }

    render() {
        return (<div className="detail_body">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title="详细"/>
            </div>

            <div className="detail_eventField">
                <div className='deTime'>
                    {this.focusEvent.date} 2023 <br/>
                    This is event {this.focusEvent.key}.
                </div>

                <div className='deTag'>
                    <Tag color='primary' className='chTag'>唱</Tag>
                    <Tag color='blue' className='chTag'>跳</Tag>
                    <Tag color='red' className='chTag'>rap</Tag>
                    <Tag color='green' className='chTag'>篮球</Tag>
                </div>
                <Collapse defaultActiveKey={['1']}>
                    <Collapse.Panel key='感想' title='感想'>
                        {
                            <div className='allThoughts'>
                                {allThoughts.map(this.renderThoughts)}
                            </div>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='图片' title='图片'>
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
                </Collapse>
                <div className='deLocation'>
                    地点：美国
                </div>
                <Button className='btnEdit' block>
                    编辑
                </Button>
                <Button className='btnShare' block>
                    分享
                </Button>
            </div>
        </div>);
    }
}

export default Details