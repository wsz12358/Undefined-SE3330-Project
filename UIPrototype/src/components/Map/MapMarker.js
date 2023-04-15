import React from "react";
import {ClockCircleOutline, CloseOutline, RightOutline} from "antd-mobile-icons";
import {useHistory} from "react-router-dom";

export default function Marker(props) {
    const event = props.event;
    const history = useHistory();

    return (
        <div id="markerBody">
            <div style={{position: 'relative', backgroundColor: 'rgb(92,192,168)'}}>
                <div className="markerText"
                     style={{fontSize: 30}}>
                    {event.date}
                </div>
                <div className="markerText"
                     style={{fontWeight: 400}}>
                    <ClockCircleOutline/> &nbsp; 22:18 &nbsp; - &nbsp; 23:18
                </div>

                <div id="markerOps">
                    <div onClick={props.setVis}><CloseOutline fontSize={30}/></div>
                    <div onClick={() => {
                        history.push('/stats/details', {id: event.key})
                    }}><RightOutline fontSize={30}/></div>
                </div>
            </div>

            <div id="markerImg"/>
        </div>
    )
}