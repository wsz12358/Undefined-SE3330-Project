import React from "react";
import {ClockCircleOutline, CloseOutline, RightOutline} from "antd-mobile-icons";
import {useHistory} from "react-router-dom";

export default function Marker(props) {
    const event = props.event;
    const history = useHistory();
    const e_date = event.begintime.substring(0, 10);
    const beginTime = event.begintime.split('/');
    const finishTime = event.finishtime.split('/');

    return (
        <div id="markerBody">
            <div style={{position: 'relative', backgroundColor: 'rgb(92,192,168)'}}>
                <div className="markerText"
                     style={{fontSize: 30}}>
                    {e_date}
                </div>
                <div className="markerText"
                     style={{fontWeight: 400}}>
                    <ClockCircleOutline/> &nbsp;
                    {beginTime[3] + ":" + beginTime[4]} - {finishTime[3] + ":" + finishTime[4]}
                </div>

                <div id="markerOps">
                    <div onClick={props.setVis}><CloseOutline fontSize={30}/></div>
                    <div onClick={() => {
                        history.push('/stats/details', {id: event.eventid})
                    }}><RightOutline fontSize={30}/></div>
                </div>
            </div>

            <div id="markerImg"/>
        </div>
    )
}