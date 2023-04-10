import React from 'react';
import './Record.css';
import HeaderBar from "../../components/HeaderBar";
import ChatMessage from "../../components/ChatMessage";
import {Button, Dialog, SearchBar} from "antd-mobile";

class Record extends React.Component {
    state = {
        messages: [
            {myType: true, message: 'Hello , Amiya!', key: 1},
            {myType: false, message: 'Hi, how are you doctor?', key: 2},
            {myType: true, message: 'I am good, thank you!', key: 3},
            {myType: false, message: 'That\'s great to hear!', key: 4},
        ],
        isStart: false
    }

    onClickBack = () => {
        if (this.state.isStart) {
            Dialog.show({
                content: '还在记录中，退出将不会保存，继续吗？',
                closeOnAction: true,
                actions: [[
                    {key: 'cancel', text: '取消'},
                    {key: 'confirm', text: '确认', bold: true, danger: true,},
                ]],
                onAction: (e) => {
                    if (e.key === 'confirm')
                        this.props.history.goBack();
                }
            })
        } else
            this.props.history.goBack();
    }

    clearInput = () => {
        this.inputMsg.clear();
        this.inputMsg.focus();
    }

    render() {
        const msgFieldMBottom = this.state.isStart ? 170 : 90;

        return (
            <div id="record_body">
                <div id="record_absoluteField">
                    <HeaderBar title="记录"
                               backFunc={this.onClickBack}/>
                </div>


                <div id="record_msgField"
                     style={{overflow: 'scroll', paddingTop: 24, marginBottom: msgFieldMBottom}}>
                    <div>
                        {this.state.messages.map((msg, index) => (
                            <ChatMessage key={index} msg={msg}/>
                        ))}
                    </div>
                </div>


                <div id="record_bottom"
                     ref={e => this.bottom = e}>
                    <div id="record_btn">
                        <Button color={"primary"}
                                style={{fontSize: 25, width: 100}}
                                onClick={() => {
                                    if (!this.state.isStart) {
                                        this.bottom.classList.add("bottom_up");
                                        this.bottom.classList.remove("bottom_down");
                                    } else {
                                        this.bottom.classList.remove("bottom_up");
                                        this.bottom.classList.add("bottom_down");
                                    }
                                    this.setState({isStart: !this.state.isStart})
                                }}>{this.state.isStart ? "Stop" : "Start"}</Button>
                    </div>
                    <div id="record_utils">
                        <SearchBar icon={null} placeholder='请输入内容'
                                   ref={e => this.inputMsg = e}
                                   style={{
                                       width: 260, marginBottom: 40,
                                       '--height': '40px'
                                   }}
                                   onSearch={(e) => {
                                       if (e === "")
                                           return;
                                       const tmp = [...this.state.messages];
                                       tmp.push({
                                           myType: true,
                                           message: e,
                                           key: 1
                                       })
                                       this.clearInput();
                                       this.setState({
                                           messages: [...tmp]
                                       })
                                   }}/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const e = document.getElementById("record_msgField");
        e.scrollTo({
            top: e.scrollHeight,
            behavior: 'smooth'
        })
    }
}

export default Record;
