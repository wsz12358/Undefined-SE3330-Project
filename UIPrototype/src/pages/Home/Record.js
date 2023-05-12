import React from 'react';
import '../../css/Record.css';
import HeaderBar from "../../components/HeaderBar";
import ChatMessage from "../../components/Record/ChatMessage";
import moment from "moment/moment";
import {continueEvent, pauseEvent, saveCurMsg} from "../../service/loginService";
import store from "../../redux/Store";
import RecordBottom from "../../components/Record/RecordBottom";
import SaveCurDialog from "../../utils/Record/SaveCurDialog";
import BlockQuitDialog from "../../utils/Record/BlockQuitDialog";
import SaveQuitDialog from "../../utils/Record/SaveQuitDialog";
import ContinueDialog from "../../utils/Record/ContinueDialog";

class Record extends React.Component {
    constructor(props) {
        super(props);
        this.SaveQuitDialog = SaveQuitDialog.bind(this);
        this.BlockQuitDialog = BlockQuitDialog.bind(this);
        this.SaveCurDialog = SaveCurDialog.bind(this);
        this.ContinueDialog = ContinueDialog.bind(this);
    }

    state = {
        messages: [],
        isStart: 0, //0 new, 1 start, 2 end
        isExtd: false,
        inUploading: 0,
        beginTime: "",
        durTime: 0,
        select: [],

        isLoaded: false,
        needRefresh: false,
        scrollSwitch: false,
    }

    setSelect = (e) => {
        this.setState({select: [...e]});
    }

    setDurTime = () => {
        this.setState({durTime: this.state.durTime + 1});
    }

    setUploading = (e) => {
        if (e) this.setState({inUploading: this.state.inUploading + 1});
        else this.setState({inUploading: this.state.inUploading - 1});
    }

    addMsg = (e, datatype, collect = 0) => {
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

        const formattedTime = moment(timestamp).format("YYYY/MM/DD/HH/mm/ss");

        if (datatype === "pend") {  // pend need not be saved in the database, and need not change inUploading as well
            this.setState({messages: [...tmp]}, () => this.setState({scrollSwitch: true}));
        } else {
            saveCurMsg({
                timestamp: formattedTime,
                datatype: datatype,
                message: e,
                user: store.getState().user.userid.toString(),
            }, callback);
        }
    };

    saveCur = () => {
        let durT = this.state.durTime;
        console.log(durT);

        pauseEvent({
            begintime: this.state.beginTime,
            duration: durT.toString(),
            tags: this.state.select.join("/"),
            user: store.getState().user.userid.toString(),
        }, () => {
            this.props.history.goBack();
        });
    }

    onClickBack = () => {
        if (this.state.inUploading) {
            this.BlockQuitDialog(); // Show a confirming dialog
            return;
        }
        if (this.state.isStart === 1)
            this.SaveCurDialog();   // Show a confirming dialog as well as the operations
        else if (this.state.isStart === 2)
            this.SaveQuitDialog(false);  // Show a confirming dialog as well as the operations
        else
            this.props.history.goBack();
    }

    onClickBtn = () => {
        if (!this.state.isStart) {
            this.bottom.classList.add("bottom_up");
            this.bottom.classList.remove("bottom_down");
            this.header.classList.add("white2green");
            this.setUploading(true);

            const beginT = new Date().getTime();
            this.setState({beginTime: moment(beginT).format('YYYY/MM/DD/HH/mm/ss')});

            this.addMsg("开始记录。现在是" +
                moment(beginT).format('HH:mm:ss') +
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
            this.SaveQuitDialog(true, 1);
        }
        this.setState({isStart: this.state.isStart + 1}); // scroll problem
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

    render() {
        const msgFieldMBottom = this.state.isStart === 1 ?
            (this.state.isExtd ? 240 : 160) : 90;

        return (
            <div id="record_body">
                {this.state.isLoaded &&
                    <>
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

                        <div id="record_b">
                            <RecordBottom ref={e => this.bottom = e}
                                          state={this.state}
                                          onClickBtn={this.onClickBtn.bind(this)}
                                          setUploading={this.setUploading.bind(this)}
                                          addMsg={this.addMsg.bind(this)}
                                          onClickExtd={this.onClickExtd.bind(this)}
                                          setDurTime={this.setDurTime.bind(this)}
                                          setSelect={this.setSelect.bind(this)}/>
                        </div>
                    </>}
            </div>
        );
    }

    componentDidMount() {
        const callback = (data) => {
            this.ContinueDialog(data);
        }

        const errback = () => {  // return null JSON object -> no cur event
            this.setState({isLoaded: true});
        }

        if (!this.state.isLoaded)
            continueEvent({user: store.getState().user.userid.toString()}, callback, errback);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.isLoaded && this.state.scrollSwitch) {
            const e = document.getElementById("record_msgField");
            e.scrollTo({
                top: e.scrollHeight - 10,
                behavior: 'smooth'
            });
            this.setState({scrollSwitch: false});
        }

        if (this.state.needRefresh) {
            this.onClickBtn();
            this.setState({needRefresh: false});
        }
    }
}

export default Record;