import React from "react";
import {LeftOutline, RightOutline} from "antd-mobile-icons";

export default function StatsHeader(props) {
    const {beginTime, finishTime, setState} = props;

    return (
        <div style={{
            font: '600 20px/1.2 "Microsoft YaHei UI"',
            textAlign: 'center', padding: '5px 10px',
            backgroundColor: '#bbdfbb', borderRadius: '20px',
            position: 'fixed', top: '200px', zIndex: 5,
            border: '5px solid #dbafab', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            <div className="stats_statsArrow" style={{left: '-20px'}}>
                <LeftOutline onClick={() => {
                    const bTime = new Date(beginTime.getTime() - 7 * (24 * 60 * 60 * 1000));
                    const fTime = new Date(finishTime.getTime() - 7 * (24 * 60 * 60 * 1000));
                    setState({beginTime: bTime, finishTime: fTime});
                }}
                             fontSize={30}/>
            </div>

            <div style={{padding: '0 10px'}}>
                {beginTime !== null &&
                    (beginTime.getMonth() + 1).toString() + "/" +
                    (beginTime.getDate()).toString()}
                &nbsp; - &nbsp;
                {finishTime !== null &&
                    (finishTime.getMonth() + 1).toString() + "/" +
                    (finishTime.getDate()).toString()}
            </div>


            <div className="stats_statsArrow" style={{right: '-20px'}}>
                <RightOutline onClick={() => {
                    const bTime = new Date(beginTime.getTime() + 7 * (24 * 60 * 60 * 1000));
                    const fTime = new Date(finishTime.getTime() + 7 * (24 * 60 * 60 * 1000));
                    setState({beginTime: bTime, finishTime: fTime});
                }}
                              fontSize={30}/>
            </div>
        </div>
    )
}