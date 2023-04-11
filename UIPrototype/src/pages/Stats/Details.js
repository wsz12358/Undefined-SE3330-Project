import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import './Details.css'

import {Collapse, Dialog, Grid, Image, List, SwipeAction, Button, Modal, Input, Form, Selector} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {
    AddCircleOutline,
    ClockCircleOutline,
    CloseOutline,
    EnvironmentOutline,
    EyeOutline,
    UserOutline
} from "antd-mobile-icons";
import eventListDemo from "../../utils/EventListDemo";
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";


class Details extends React.Component {
    state = {
        onEdit: false,
        allThoughts: ["全民制作人大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱、跳、rap、篮球，music",
            "🐔👈，🗿⬇️☯️😋",
            "🤮👶，🗿⬇️🗿☯️😋",
            "🌸1️⃣👀🍺👌💥",
            "🥇🤏🥢🥃"
        ],
        allPictures: [jntm, jntm, jntm, jntm, jntm, jntm, ],
        allTags: ["吃饭", "睡觉", "篮球"]
    }

    backAddr = "/stats"
    eventId = this.props.location.state.id - 1
    focusEvent = eventListDemo[this.eventId]
    selectTags = []

    btnShare = (
        <button className="btnShare" onClick={() => {
            Dialog.show({
                closeOnMaskClick: true,
                closeOnAction: true,
                actions: [
                    [
                        {
                            key: 'cancel',
                            text: '取消'
                        },
                        {
                            key: 'confirm',
                            text: '确定',
                        }
                    ]
                ],
                content: (<List className={"deList"}>
                    <ListItem key={1} prefix={<EnvironmentOutline/>} onClick={() => {
                    }}>所在位置</ListItem>
                    <ListItem key={2} prefix={<EyeOutline/>} onClick={() => {
                    }}>谁可以看</ListItem>
                    <ListItem key={3} prefix={<UserOutline/>} onClick={() => {
                    }}>提醒谁看</ListItem>
                    <ListItem key={4} prefix={<ClockCircleOutline/>} onClick={() => {
                    }}>定时</ListItem>
                </List>)
            })
        }}>
            分享
        </button>
    );


    renderThoughts = (value, idx) => {
        return (
            <SwipeAction key={idx} rightActions={this.state.onEdit ? [{key: 'delete',
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
            }] : []}>
                <ListItem>
                    {value}
                </ListItem>
            </SwipeAction>
        )
    }

    renderPictures = (pic, idx) => {
        return <GridItem className='picture' key={idx}>
            {this.state.onEdit && <Button className={"btnDeletePic"} onClick={() => {
                Dialog.confirm(
                    {content: "确定要删除吗？",
                        onConfirm: () => {
                            this.setState(this.state.allPictures.splice(idx, 1));
                        }}
                );
            }
            }><CloseOutline/></Button>}
            <Image src={pic} width={100} height={100} fit='fill' onClick={() => {
                Modal.show({
                    image: jntm,
                    content: "jntm",
                    closeOnMaskClick: true,
                    actions: []
                })
            }
            }/>
        </GridItem>
    }

    renderTags = (tag, idx) => {
        return (<GridItem className="deTag" key={idx} onClick={this.state.onEdit ? () => {
            Dialog.confirm(
                {content: "确定要删除吗？",
                    onConfirm: () => {
                        this.setState(this.state.allTags.splice(idx, 1));
                    }}
            );
        } : () => {}}>
            {tag}
        </GridItem>)
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

                <Collapse defaultActiveKey={['1']} className="myCollapse">
                    <Collapse.Panel key='感想' title='感想' className="myCollapsePanel">
                        {
                            <List>
                                {this.state.allThoughts.map(this.renderThoughts)}
                                {this.state.onEdit &&
                                <Form name={"form"} layout={"horizontal"} onFinish={(v)=>{
                                    this.setState(()=>{this.state.allThoughts.push(v.inputValue);return{}})
                                }}>
                                    <Form.Item name={"inputValue"}>
                                        <Input placeholder={"请输入内容"} clearable/>
                                    </Form.Item>
                                </Form>}
                            </List>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='图片' title='图片' className="myCollapsePanel">
                        {
                            <div>
                                <Grid columns={3}>
                                    {this.state.allPictures.map(this.renderPictures)}
                                    {this.state.onEdit && <div className='addPicture' onClick={() => {
                                        this.setState(state => {
                                            state.allPictures.push(jntm)
                                            return {}
                                        })
                                        }
                                    }>
                                        <AddCircleOutline className='addCircle'/>
                                    </div>}
                                </Grid>
                            </div>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='tag' title='tag' className="myCollapsePanel">
                        {
                            <Grid columns={5}>
                                {this.state.allTags.map(this.renderTags)}
                                {this.state.onEdit && <div className={"addTag"} onClick={()=>{
                                    Dialog.show({
                                        closeOnMaskClick: true,
                                        closeOnAction: true,
                                        actions: [
                                            [
                                                {
                                                    key: 'cancel',
                                                    text: '取消'
                                                },
                                                {
                                                    key: 'confirm',
                                                    text: '确定',
                                                    onClick: ()=>{this.setState(()=>{
                                                        console.log(this.selectTags)
                                                        this.selectTags.map((value)=>{if (!this.state.allTags.includes(value.label)) this.state.allTags.push(value.label)})
                                                        this.selectTags = []
                                                        return{};
                                                    })}
                                                }
                                            ]
                                        ],
                                        content: (
                                                <Selector onChange={(a, extend)=>{
                                                    this.selectTags = extend.items;
                                                }}
                                                multiple={true}
                                                columns={3}
                                                showCheckMark={false}
                                                /*style={{
                                                    '--border-radius': '100px',
                                                    '--border': 'solid black 1px',
                                                    '--checked-border': 'solid black 1px',
                                                    '--padding': '8px 24px',
                                                    '--checked-color': 'white',
                                                    '--color': 'white',
                                                    '--text-color': 'red'
                                                }}*/
                                                options={[
                                                    {label: '唱', value: 1},
                                                    {label: '跳', value: 2},
                                                    {label: 'rap', value: 3},
                                                    {label: '篮球', value: 4},
                                                    {label: 'music', value: 5},
                                                    {label: '吃饭', value: 6},
                                                    {label: '睡觉', value: 7}
                                                ]}/>
                                        )
                                    })
                                }}>添加</div>}
                            </Grid>
                        }
                    </Collapse.Panel>
                </Collapse>

                {!this.state.onEdit && <Button block className={"btnEdit"} size={"large"} onClick={() => {
                    this.setState({onEdit: true})
                }}>
                    编辑
                </Button>}
                {this.state.onEdit && <Button block className={"btnQuitEdit"} size={"large"} onClick={() => {
                    this.setState({onEdit: false})
                }}>
                    退出编辑
                </Button>}
            </div>
        </div>);
    }
}

export default Details