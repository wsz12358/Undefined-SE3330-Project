import React, {createRef} from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import '../../css/Details.css'

import {
    Collapse,
    Dialog,
    Grid,
    Image,
    List,
    SwipeAction,
    Button,
    Modal,
    Input,
    Form,
    Selector,
    ActionSheet
} from "antd-mobile";
import jntm from "../../assets/jntm.png"
import {
    AddCircleOutline,
    ClockCircleOutline,
    CloseOutline,
    EnvironmentOutline,
    EyeOutline,
    UserOutline
} from "antd-mobile-icons";
import {ListItem} from "antd-mobile/es/components/list/list-item";
import {GridItem} from "antd-mobile/es/components/grid/grid";
import {getMsgs, saveCurMsg, saveMsg} from "../../service/loginService";
import store from "../../redux/Store";
import {withRouter} from "react-router-dom";
import moment from "moment/moment";
import HandleImageUpload from "../../utils/Record/HandleImageUpload";
class Details extends React.Component {
    state = {
        onEdit: false,
        visible: false,
        isCamera: false,
        inUploading: 0,
        messages: [],
        allTags: []
    }

    constructor(props) {
        super(props);
        this.refresh();
    }

    eventId = this.props.location.state.id;
    backAddr = "/stats"
    selectTags = []
    fileInputRef = createRef();
    msgInputRef = createRef();

    setUploading = (e) => {
        if (e) this.setState({inUploading: this.state.inUploading + 1});
        else this.setState({inUploading: this.state.inUploading - 1});
    }

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

    addMsg = (e, datatype, collect = 0) => {console.log(`e: ${e}, dt: ${datatype}, coll: ${collect}`);
        let tmp = [...this.state.messages];
        let pend = null;  //used for pending image, popped from the array
        const timestamp = new Date().getTime(); // Get the current time
        const callback = () => {
            this.setState({messages: [...tmp]}, () => this.setState({scrollSwitch: true}));
            this.setUploading(false);
        }

        if (tmp.length && datatype === "img") {
            pend = tmp[collect]; // remove the pending message
        }

        const newMsg = { // Update this.state
            datatype: datatype,
            message: e,
            key: tmp.length + 1,
            timestamp: pend === null ? timestamp : pend.timestamp,
            // use the earlier timestamp when it comes to img
        }

        if (datatype !== "img") tmp.push(newMsg);
        else tmp[collect] = newMsg;

        const formattedTime = moment(timestamp).format("YYYY/MM/DD/HH/mm/ss");console.log(tmp)

        if (datatype === "pend") {  // pend need not be saved in the database, and need not change inUploading as well
            this.setState({messages: [...tmp]}, () => this.setState({scrollSwitch: true}));
        } else {
            console.log("save");
            /*saveMsg({
                timestamp: formattedTime,
                datatype: datatype,
                message: e,
                user: store.getState().user.userid.toString(),
            }, callback);*/
        }
    };

    handleFileInputChange = (e) => {
        this.setUploading(true);  // start uploading, must not be interrupted
        this.addMsg("", "pend");  // add a fake message for loading
        const file = e.target.files[0];
        HandleImageUpload(file, this.state.messages.length, this.addMsg);  // and then upload
    };

    refresh = () => {
        const callback = (e) => {
            /*console.log(e)*/
            this.setState(() => {
                e.messages.map((v)=>{
                    this.state.messages.push(v)
                })
            });
            this.setState({allTags: e.tags.split('/')});
            // console.log(this.state.allThoughts)
        }
        const u = store.getState().user.userid.toString();
        const v = this.eventId.toString();

        getMsgs({user: u, eventid: v}, callback,
            () => {
            })
    }

    renderThoughts = (value, idx) => {
        if (value.datatype === "img") return ;
        return (
            <SwipeAction key={idx} rightActions={this.state.onEdit ? [{
                key: 'delete',
                text: '删除',
                color: 'danger',
                onClick: () => {
                    Dialog.confirm(
                        {
                            content: "确定要删除吗？",
                            onConfirm: () => {
                                this.setState({messages: this.state.messages.splice(idx, 1)});
                            }
                        }
                    );
                }
            }] : []}>
                <ListItem>
                    {value.message}
                </ListItem>
            </SwipeAction>
        )
    }

    renderPictures = (pic, idx) => {if (pic.datatype === "msg") return;
        return <GridItem className='picture' key={idx}>
            {this.state.onEdit && <Button className={"btnDeletePic"} onClick={() => {
                Dialog.confirm(
                    {
                        content: "确定要删除吗？",
                        onConfirm: () => {
                            this.setState({messages: this.state.messages.splice(idx, 1)});
                        }
                    }
                );
            }
            }><CloseOutline/></Button>}
            <Image src={pic.message} width={100} height={100} fit='fill' onClick={() => {
                Modal.show({
                    image: pic.message,
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
                {
                    content: "确定要删除吗？",
                    onConfirm: () => {
                        this.setState({allTags: this.state.allTags.splice(idx, 1)});
                    }
                }
            );
        } : () => {
        }}>
            {tag}
        </GridItem>)
    }

    OnClickBack = () => {
        this.props.history.replace(this.backAddr);
    }

    render() {
        return (<div className="detail_body">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={this.OnClickBack} title="详细"
                           right={this.btnShare}/>
            </div>

            <div className="detail_eventField">
                <div className="deTitle">
                    This is event .
                </div>
                <div className='deTime'>
                     2023
                </div>

                <Collapse defaultActiveKey={['1']} className="myCollapse">
                    <Collapse.Panel key='感想' title='感想' className="myCollapsePanel">
                        {
                            <List>
                                {this.state.messages.map(this.renderThoughts)}
                                {this.state.onEdit &&
                                    <Form name={"form"} layout={"horizontal"} onFinish={(v) => {
                                        this.addMsg(v.inputValue, "msg", this.state.messages.length);
                                        this.msgInputRef.current.clear();
                                    }}>
                                        <Form.Item name={"inputValue"}>
                                            <Input ref={this.msgInputRef} placeholder={"请输入内容"} clearable/>
                                        </Form.Item>
                                    </Form>}
                            </List>
                        }
                    </Collapse.Panel>
                    <Collapse.Panel key='图片' title='图片' className="myCollapsePanel">
                        {
                            <div>
                                <Grid columns={3}>
                                    {this.state.messages.map(this.renderPictures)}
                                    <input type="file"
                                           ref={this.fileInputRef}
                                           style={{display: "none"}}
                                           accept="image/*"
                                           onChange={this.handleFileInputChange}
                                    />
                                    {this.state.onEdit && <div className='addPicture' onClick={() => {
                                        this.setState({visible: true})
                                    }
                                    }>
                                        <ActionSheet visible={this.state.visible}
                                                     actions={[
                                                         {text: "从相册中上传", key: "upload"},
                                                         {text: "摄像头拍摄", key: "camera"},
                                                     ]}
                                                     onClose={() => this.setState({visible: false})}
                                                     onAction={(action) => {
                                                         if (action.key === "upload") {
                                                             this.setState({visible: false})
                                                             this.fileInputRef.current.click();
                                                         } else if (action.key === "camera") {
                                                             this.setState({visible: false})
                                                             this.setState({isCamera: true})
                                                         }
                                                     }}/>
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
                                {this.state.onEdit && <div className={"addTag"} onClick={() => {
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
                                                    onClick: () => {
                                                        this.setState(() => {
                                                            console.log(this.selectTags)
                                                            this.selectTags.map((value) => {
                                                                if (!this.state.allTags.includes(value.label)) this.state.allTags.push(value.label)
                                                            })
                                                            this.selectTags = []
                                                            return {};
                                                        })
                                                    }
                                                }
                                            ]
                                        ],
                                        content: (
                                            <Selector onChange={(a, extend) => {
                                                this.selectTags = extend.items;
                                            }}
                                                      multiple={true}
                                                      columns={3}
                                                      showCheckMark={false}
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

export default withRouter(Details)