import React from "react";
import "../css/UniStyle.css"
import {ClockCircleOutline, RightOutline} from "antd-mobile-icons";
import {useHistory} from "react-router-dom";

export default function SingleEvent(props) {

    const event = props.event;
    const goAddr = props.goAddr;
    const history = useHistory();
    const onClickEvent = (value) => history.push(goAddr, {id: value})

    return (
        <div id="sgEventField">
            <div className="sgEventDate">{event.date} / Wed.</div>

            <div style={{width: '100%', position: 'relative'}}>
                <div className="sgEventIcon"/>

                <div className="sgEventBox"
                     onClick={() => onClickEvent(event.eventid)}>
                    <div style={{
                        padding: '5px 0', font: '500 10px/1.5 "Microsoft YaHei UI"'
                    }}>
                        22:18 - 23:18 &nbsp;&nbsp;&nbsp; <ClockCircleOutline/> 60
                    </div>

                    <div className="sgEventPic"/>

                    <div className="sgEventTag">
                        <ClockCircleOutline/>
                        Category &nbsp;&nbsp;&nbsp; #Tag1 &nbsp;&nbsp; #Tag2
                    </div>

                    <div className="sgEventArrow"><RightOutline fontSize={50}/></div>
                </div>
            </div>
        </div>
    )
}