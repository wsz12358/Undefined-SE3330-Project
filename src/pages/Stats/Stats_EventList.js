import React from 'react'
import './Stats.css'
import { RightOutline } from "antd-mobile-icons";

const divstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',
    backgroundImage: 'linear-gradient(30deg, rgb(92,255,168), rgb(92,192,168) 25%, rgb(92,192,168) 75%, rgb(92,255,168))',
    marginBottom: 20,
    marginRight: 20,
    width: '75%',
    borderRadius: '20px',
    boxShadow: '0 0 2px 3px #ddd',
    font: 'bold 30px Microsoft-YaHei'
}

const stats_eventList = (eventlist) => {
    return(<div className="eventListField" align="right">
        {eventlist.map(sgevent => (
            <div className={"sgeventBox" + sgevent + " sgeventBox"}
                 style={divstyle}>
                Event {sgevent}
                <div className="sgeventIcon">
                    <RightOutline fontSize={50}/>
                </div>
            </div>
        ))}
    </div>)
}

export default stats_eventList