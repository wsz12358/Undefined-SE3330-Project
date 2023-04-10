import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import './Details.css'

import {Badge, Collapse, Dialog, Grid, Image, List, SwipeAction} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {AddCircleOutline, ClockCircleOutline, EnvironmentOutline, EyeOutline, UserOutline} from "antd-mobile-icons";
import eventListDemo from "../../utils/EventListDemo";
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";


class Details extends React.Component {
    state = {
        allThoughts: ["全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music",
            "🐔👈，🗿⬇️☯️😋",
            "🤮👶，🗿⬇️🗿☯️😋",
            "🌸1️⃣👀🍺👌💥",
            "🥇🤏🥢🥃"
        ],
        allPictures: [jntm, jntm, jntm, jntm, jntm, jntm, jntm, jntm, jntm],
        allTags: ["吃饭", "睡觉", "打篮球"]
    }

    backAddr = "/stats"
    eventId = this.props.location.state.id - 1
    focusEvent = eventListDemo[this.eventId]

    btnShare = (
        <button className="btnShare">
            分享
        </button>
    );


    renderThoughts = (value, idx) => {
        return (
            <SwipeAction key={value} rightActions={[{key: 'delete',
                text: '删除',
                color: 'danger',
                onClick: () => {
                    Dialog.confirm(
                        {content: "确定要删除吗？",
                            onConfirm: () => {
                                this.setState(this.state.allThoughts.splice(idx, 1));
                            }}
                    );
                }
            }]}>
                <ListItem>
                    {value}
                </ListItem>
            </SwipeAction>
        )
    }

    renderPictures = (pic, idx) => {
        return <GridItem className='picture' key={idx}>
            <Badge content='-' className='removeContent'>
                <Image src={pic} width={100} height={100} fit='fill' onContainerClick={() => {
                    Dialog.confirm(
                        {content: "确定要删除吗？",
                            onConfirm: () => {
                                this.setState(this.state.allPictures.splice(idx, 1));
                            }}
                    );
                }}/>
            </Badge>
        </GridItem>
    }

    renderTags = (tag, idx) => {
        return (<div className="deTag" key={idx} onClick={() => {
            Dialog.confirm(
                {content: "确定要删除吗？",
                    onConfirm: () => {
                        this.setState(this.state.allTags.splice(idx, 1));
                    }}
            );
        }}>
            {tag}
        </div>)
    }

    render() {
        return (<div className="detail_body">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr, "pop")} title="详细" right={this.btnShare}/>
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
                            <List>
                                {this.state.allThoughts.map(this.renderThoughts)}
                            </List>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='图片' title='图片' className="myCollapsePanel">
                        {
                            <div>
                                <Grid columns={3}>
                                    {this.state.allPictures.map(this.renderPictures)}
                                </Grid>
                                {/*<div className='addPicture'>
                                    <AddCircleOutline className='addCircle'/>
                                </div>*/}
                            </div>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='tag' title='tag' className="myCollapsePanel">
                        {
                            <div className="allTags">
                                {this.state.allTags.map(this.renderTags)}
                            </div>
                        }
                    </Collapse.Panel>
                </Collapse>

                <List className={"deList"}>
                    <ListItem key={1} prefix={<EnvironmentOutline/>} onClick={() => {
                    }}>所在位置</ListItem>
                    <ListItem key={2} prefix={<EyeOutline/>} onClick={() => {
                    }}>谁可以看</ListItem>
                    <ListItem key={3} prefix={<UserOutline/>} onClick={() => {
                    }}>提醒谁看</ListItem>
                    <ListItem key={4} prefix={<ClockCircleOutline/>} onClick={() => {
                    }}>定时</ListItem>
                </List>

            </div>
        </div>);
    }
}

export default Details