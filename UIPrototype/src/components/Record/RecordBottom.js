import {Button, SearchBar} from "antd-mobile";
import {AddCircleOutline} from "antd-mobile-icons";
import RecordUtils from "./RecordUtils";
import React, {forwardRef, useRef} from "react";
import "../../css/Record.css"

const RecordBottom = forwardRef((props, ref) => {
    const inputMsg = useRef();
    const clearInput = () => {
        inputMsg.current.clear();
        inputMsg.current.focus();
    }

    return (
        <div id="record_bottom" ref={ref}>
            <div id="record_btn">
                <Button color={"primary"}
                        style={{fontSize: 25, width: 100}}
                        onClick={props.onClickBtn}>
                    {!props.state.isStart ? "Start" :
                        props.state.isStart === 1 ? "Stop" : "Save"}</Button>
            </div>
            <div id="record_searchBar"
                 style={{position: 'relative'}}>
                <SearchBar icon={null} placeholder='请输入内容'
                           ref={inputMsg}
                           style={{
                               width: 260, marginBottom: 30,
                               '--height': '40px'
                           }}
                           onSearch={(e) => {
                               if (e === "") return;
                               props.setUploading(true);
                               props.addMsg(e, "msg");
                               clearInput();
                           }}/>
                <div id="record_extd"
                     style={{position: 'absolute', right: '-50px', top: '5px'}}
                     onClick={props.onClickExtd}>
                    <AddCircleOutline fontSize={30}/>
                </div>
            </div>
            <RecordUtils flag={props.state.isStart === 1}
                         addMsg={props.addMsg}
                         setUploading={props.setUploading}
                         collect={props.state.messages.length}
                         durTime={props.state.durTime}
                         select={props.state.select}
                         setSelect={props.setSelect}/>
        </div>
    )
});

export default RecordBottom;
