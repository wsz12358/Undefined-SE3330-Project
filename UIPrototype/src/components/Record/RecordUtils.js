import Stopwatch from "../../utils/Record/Stopwatch";
import {ClockCircleOutline, PicturesOutline, CloseCircleOutline,HeartOutline} from "antd-mobile-icons";
import PChecklist from "./PopupChecklist";
import React from "react";
import "../../css/UniStyle.css"
import Pictures from "./Pictures";

export default function RecordUtils(props) {
    return (
        <div id="record_utils">
            <div className="record_gadgets">
                <Stopwatch flag={props.flag}
                           time={props.durTime}/>
                <ClockCircleOutline fontSize={40}/>
                <span>时长</span>
            </div>
            <PChecklist select={props.select}
                        setSelect={props.setSelect}/>
            <Pictures addMsg={props.addMsg}
                      setUploading={props.setUploading}
                      collect={props.collect}
            />
            <div className="record_gadgets bordered"
                 style={{paddingTop: 15}}
                 onClick={() => {
                     props.setUploading(true);
                     props.addMsg("博士，辛苦了！累了的话请休息一会儿吧。", "system");
                 }}>
                <HeartOutline fontSize={40}/>
                <span>戳戳</span>
            </div>
            <div className="record_gadgets bordered"
                 style={{paddingTop: 15}}
                 onClick={() => {
                     props.hideMessages();
                 }}>
                <CloseCircleOutline fontSize={40}/>
                <span>纯净</span>
            </div>
        </div>
    )
}