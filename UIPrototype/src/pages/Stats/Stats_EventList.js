import React from 'react'
import './Stats.css'
import SingleEvent from "../../components/SingleEvent";

const Stats_eventList = (props) => {

    const {eventList, goAddr} = props;

    return (
        <div id="event_listField" align="right">
            <div id="stats_timeScroll"/>
            {eventList.map((sgEvent, idx) => (
                <SingleEvent event={eventList[idx]} key={idx} goAddr={goAddr}/>
            ))}
        </div>
    )
}

export default Stats_eventList