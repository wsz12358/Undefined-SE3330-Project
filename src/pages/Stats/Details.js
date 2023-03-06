import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import './Details.css'

import {Badge, Button, Collapse, Image, Tag} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {AddCircleOutline} from "antd-mobile-icons";


class Details extends React.Component {

    backAddr = "./stats"

    render() {
        return (<div className="detailBody">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title="详细"/>
            </div>
            <div className='deTime'>
                    2023/3/6 12:00
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
                            <div className='thought'>
                                全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music
                            </div>
                            <div className='thought'>
                                🐔👈，🗿⬇️☯️😋
                            </div>
                            <div className='thought'>
                                🤮👶，🗿⬇️🗿☯️😋
                            </div>
                            <div className='thought'>
                                🌸1️⃣👀🍺👌💥
                            </div>
                            <div className='thought'>
                                🥇🤏🥢🥃
                            </div>
                        </div>
                    }
                </Collapse.Panel>
                <Collapse.Panel key='图片' title='图片'>
                    {
                        <div className='allPicture'>
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
        </div>);
    }
}

export default Details