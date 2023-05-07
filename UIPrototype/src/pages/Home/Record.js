import React from 'react';
import '../../css/Record.css';
import HeaderBar from "../../components/HeaderBar";
import ChatMessage from "../../components/Record/ChatMessage";
import {Dialog} from "antd-mobile";
import moment from "moment/moment";
import {saveCurMsg} from "../../service/loginService";
import store from "../../redux/Store";
import {setCategory} from "../../redux/FilterActions";
import RecordBottom from "../../components/Record/RecordBottom";

class Record extends React.Component {
    state = {
        messages: [],
        isStart: 0, //0 new, 1 start, 2 end
        isExtd: false,
        isCamera: false,
        inUploading: 0
    }

    setCamera = (e) => {
        this.setState({isCamera: e});
    }

    setUploading = (e) => {
        if (e) this.setState({inUploading: this.state.inUploading + 1});
        else this.setState({inUploading: this.state.inUploading - 1});
    }

    addMsg = (e, msgType, collect = 0) => {
        let tmp = [...this.state.messages];
        let pend = null;  //used for pending image, popped from the array
        const timestamp = new Date().getTime(); // Get the current time
        const callback = () => {
            this.setState({messages: [...tmp]});
            this.setUploading(false);
        }

        if (tmp.length && msgType === "img") {
            pend = tmp[collect]; // remove the pending message
        }

        const newMsg = { // Update this.state
            msgType: msgType,
            message: e,
            key: tmp.length + 1,
            timestamp: pend === null ? timestamp : pend.timestamp,
            // use the earlier timestamp when it comes to img
        }

        if (msgType !== "img") tmp.push(newMsg);
        else tmp[collect] = newMsg;

        const formattedTime = moment(timestamp).format("YYYY/MM/DD/HH/mm/ss");

        if (msgType === "pend") {  // pend need not be saved in the database, and need not change inUploading as well
            this.setState({messages: [...tmp]});
        } else {
            saveCurMsg({timestamp: formattedTime, datatype: msgType, message: e}, callback);
        }
    };

    onClickBack = () => {
        if (this.state.inUploading) {
            Dialog.show({
                style: {
                    textAlign: 'center'
                },
                content: '仍有消息在上传中，请稍后再试！',
                closeOnAction: true,
                actions: [[
                    {key: 'confirm', text: '确认'},
                ]],
            });
            return;
        }

        if (this.state.isStart === 1) {
            Dialog.show({
                style: {
                    textAlign: 'center'
                },
                content: '还在记录中，退出将会保存，继续吗？',
                closeOnAction: true,
                actions: [[
                    {key: 'cancel', text: '取消'},
                    {key: 'confirm', text: '确认', bold: true, danger: true,},
                ]],
                onAction: (e) => {
                    if (e.key === 'confirm')
                        // TODO: 保存至curevent表，本地记录未完成的事件
                        this.setState({isStart: this.state.isStart + 1});
                        this.props.history.goBack();
                }
            })
        } else if (this.state.isStart === 2)
            this.saveQuit(false);
        else
            this.props.history.goBack();
    }

    onClickBtn = () => {
        if (!this.state.isStart) {
            this.bottom.classList.add("bottom_up");
            this.bottom.classList.remove("bottom_down");
            this.header.classList.add("white2green");
            this.setUploading(true);
            this.addMsg("开始记录。现在是" +
                moment(new Date().getTime()).format('HH:mm:ss').toString() +
                "，专心致志才能有所收获哦！", "system");
        } else if (this.state.isStart === 1) {
            if (!this.state.isExtd) {
                this.bottom.classList.remove("bottom_up");
                this.bottom.classList.remove("bottom_edown");
                this.bottom.classList.add("bottom_down");
            } else {
                this.bottom.classList.remove("bottom_extd");
                this.bottom.classList.add("bottom_bigdown");
            }
            this.header.classList.add("green2orange");
            this.setUploading(true);
            this.addMsg("结束记录。现在是" +
                moment(new Date().getTime()).format('HH:mm:ss').toString() +
                "，将美好的事物记录下来，然后去放松一下吧。", "system");
        } else {
            this.saveQuit(true, 1);
        }
        this.setState({isStart: this.state.isStart + 1})
    }

    onClickExtd = () => {
        if (!this.state.isExtd) {
            this.bottom.classList.remove("bottom_up");
            this.bottom.classList.remove("bottom_edown");
            this.bottom.classList.add("bottom_extd");
        } else {
            this.bottom.classList.remove("bottom_extd");
            this.bottom.classList.add("bottom_edown");
        }
        this.setState({isExtd: !this.state.isExtd});
    }

    saveQuit = (type, idx) => {
        const callback = () => {
            if (type)
                this.props.history.push('/stats/details', {id: idx});
            else {
                store.dispatch(setCategory("event"))
                this.props.history.goBack();
            }
        }
        Dialog.show({
                style: {
                    textAlign: 'center'
                },
                content: '保存记录并退出？',
                closeOnAction: true,
                actions: [[
                    {key: 'cancel', text: '继续编辑'},
                    {key: 'confirm', text: '确认', bold: true, danger: true},
                ]],
                onAction: (e) => {
                    if (e.key === 'confirm') {
                        // set duration time in local storage to 0
                        localStorage.setItem("cur_duration", JSON.stringify(0));

                        callback();  // TODO: had better build a new table. This is hard.
                        // Current event of various users should not be stored in local storage.
                        // A table: tags, begintime, userid and messages as well.
                    }
                }
            })
    }

    render() {
        const msgFieldMBottom = this.state.isStart === 1 ?
            (this.state.isExtd ? 240 : 160) : 90;

        return (
            <div id="record_body">
                <div id="record_absoluteField"
                     ref={e => this.header = e}>
                    <HeaderBar title="记录"
                               backFunc={this.onClickBack.bind(this)}/>
                </div>

                <div id="record_msgField"
                     style={{overflow: 'scroll', paddingTop: 24, marginBottom: msgFieldMBottom}}>
                    <div>
                        {this.state.messages.map((msg, index) => (
                            <ChatMessage key={index} msg={msg}/>
                        ))}
                    </div>
                </div>

                {/*Camera component*/}
                {/*<div style={{width: 200, height: 500, zIndex: 500, position: 'absolute'}}>*/}
                {/*    {this.state.isCamera && <Camera/>}*/}
                {/*</div>*/}

                <div id="record_b">
                    <RecordBottom ref={e => this.bottom = e}
                                  onClickBtn={this.onClickBtn.bind(this)}
                                  state={this.state}
                                  setUploading={this.setUploading.bind(this)}
                                  addMsg={this.addMsg.bind(this)}
                                  onClickExtd={this.onClickExtd.bind(this)}
                                  setCamera={this.setCamera.bind(this)}
                                  ini_time={JSON.parse(localStorage.getItem("cur_duration"))}/>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const e = document.getElementById("record_msgField");
        e.scrollTo({
            top: e.scrollHeight - 10,
            behavior: 'smooth'
        })
    }
}

export default Record;