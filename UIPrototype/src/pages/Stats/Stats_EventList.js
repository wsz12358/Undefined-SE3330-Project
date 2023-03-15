import React from 'react'
import './Stats.css'
import {RightOutline, ClockCircleOutline} from "antd-mobile-icons";
import {useHistory} from "react-router-dom";

const divstyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    // backgroundImage: 'linear-gradient(30deg, rgb(92,255,168), rgb(92,192,168) 25%, rgb(92,192,168) 75%, rgb(92,255,168))',
    backgroundColor: 'rgb(92,192,168)',
    marginBottom: 150,
    marginRight: 20,
    width: '75%',
    borderRadius: '20px',
    boxShadow: '0 0 2px 3px #ddd',
    font: 'bold 30px Microsoft-YaHei',
}//change position

const Stats_eventList = (props) => {
    const history = useHistory();

    const {eventlist, goAddr} = props;

    const onClickEvent = (value) => history.push(goAddr, {id: value})

    return (<div className="event_listField" align="right">
        <div className="stats_timescroll"/>
        {eventlist.map((sgevent, idx) => (
            <div className="stats_sgEventField" key={idx}>
                <div className="stats_dateBox">
                    {eventlist[idx].date} / Wed.
                </div>
                <div className="stats_sgEventIcon"/>
                <div className={"stats_sgEventBox" + eventlist[idx].key + " stats_sgEventBox"}
                     style={divstyle}
                     onClick={() => onClickEvent(eventlist[idx].key)}>
                    <div className="stats_sgLapse">
                        22:18 - 23:18 &nbsp;&nbsp;&nbsp; <ClockCircleOutline/> 60
                    </div>
                    <div className="stats_sgPic" />
                    <div className="stats_sgTag">
                        <ClockCircleOutline/>Category &nbsp;&nbsp;&nbsp; #Tag1 &nbsp;&nbsp; #Tag2
                    </div>
                    <div className="stats_sgEventArrow">
                        <RightOutline fontSize={50}/>
                    </div>
                </div>
            </div>
        ))}
    </div>)
}

export default Stats_eventList