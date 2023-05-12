import Stopwatch from "../../utils/Stopwatch";
import {ClockCircleOutline, PicturesOutline, SmileOutline} from "antd-mobile-icons";
import PChecklist from "./PopupChecklist";
import React from "react";
import "../../css/UniStyle.css"
import Pictures from "./Pictures";

export default function RecordUtils(props) {
    return (
        <div id="record_utils">
            <div className="record_gadgets">
                <Stopwatch flag={props.flag}
                           time={props.dur_time}
                           setDurTime={props.setDurTime}/>
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
                     props.addMsg("玩原神玩的。", "system");
                 }}>
                <SmileOutline fontSize={40}/>
                <span>戳戳</span>
            </div>
        </div>
    )
}