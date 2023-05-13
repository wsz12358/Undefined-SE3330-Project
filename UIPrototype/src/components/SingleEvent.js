import React from "react";
import "../css/UniStyle.css"
import {ClockCircleOutline, RightOutline, TagOutline} from "antd-mobile-icons";
import {useHistory} from "react-router-dom";

export default function SingleEvent(props) {

    const event = props.event;
    const goAddr = props.goAddr;
    const history = useHistory();
    const onClickEvent = (value) => history.push(goAddr, {id: value})
    const e_date = event.begintime.substring(0, 10);
    const beginTime = event.begintime.split('/');
    const finishTime = event.finishtime.split('/');
    const duration = event.duration;
    const tags = event.tags.split('/');
    const t_tags = tags[0] !== '' ?
        tags.reduce((p, c) => {
            p = p + c + " / ";
            return p;
        }, "") : "None";

    return (
        <div id="sgEventField">
            <div className="sgEventDate">{e_date}</div>

            <div style={{width: '100%', position: 'relative'}}>
                <div className="sgEventIcon"/>

                <div className="sgEventBox"
                     onClick={() => onClickEvent(event.eventid)}>
                    <div style={{
                        padding: '5px 0', font: '500 10px/1.5 "Microsoft YaHei UI"'
                    }}>
                        {beginTime[3] + ":" + beginTime[4]} - {finishTime[3] + ":" + finishTime[4]}
                        &nbsp;&nbsp;&nbsp; <ClockCircleOutline/> &nbsp;
                        {duration}
                    </div>

                    <div className="sgEventPic"/>

                    <div className="sgEventTag">
                        <TagOutline/> &nbsp;
                        Category &nbsp;&nbsp;&nbsp;
                        {t_tags}
                    </div>

                    <div className="sgEventArrow"><RightOutline fontSize={50}/></div>
                </div>
            </div>
        </div>
    )
}