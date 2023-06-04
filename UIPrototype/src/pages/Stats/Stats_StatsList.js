import React from "react";
import {getEvents} from "../../service/loginService";
import store from "../../redux/Store";
import BarChart from "../../components/BarChart";
import * as echart from "echarts";
import {LeftOutline, RightOutline} from "antd-mobile-icons";

class Stats_StatsList extends React.Component {
    state = {
        eventList: [],
        isLoaded: false,
        beginTime: null,
        finishTime: null,
        focusDay: null,
    }

    render() {
        return (
            <div className='stats_listField'>

                <div className="stats_statsBox">
                    <div style={{
                        font: '600 20px/1.2 "Microsoft YaHei UI"',
                        textAlign: 'center', padding: '5px 10px',
                        backgroundColor: '#bbdfbb', borderRadius: '20px',
                    }}>
                        {this.state.beginTime !== null &&
                            (this.state.beginTime.getMonth() + 1).toString() + "/" +
                            (this.state.beginTime.getDate()).toString()}
                        &nbsp; - &nbsp;
                        {this.state.finishTime !== null &&
                            (this.state.finishTime.getMonth() + 1).toString() + "/" +
                            (this.state.finishTime.getDate()).toString()}
                        <div style={{fontSize: '20px', textAlign: 'center'}}>
                            一周内时长统计（秒）
                        </div>
                    </div>

                    <div style={{width: '100%', height: '100%'}} id="stats1"/>
                    <div className="stats_statsArrow" style={{left: '-20px'}}>
                        <LeftOutline onClick={() => {
                            const beginTime = new Date(this.state.beginTime.getTime() - 7 * (24 * 60 * 60 * 1000));
                            const finishTime = new Date(this.state.finishTime.getTime() - 7 * (24 * 60 * 60 * 1000));
                            this.setState({beginTime: beginTime, finishTime: finishTime});
                        }}
                                     fontSize={30}/>
                    </div>
                    <div className="stats_statsArrow" style={{right: '-20px'}}>
                        <RightOutline onClick={() => {
                            const beginTime = new Date(this.state.beginTime.getTime() + 7 * (24 * 60 * 60 * 1000));
                            const finishTime = new Date(this.state.finishTime.getTime() + 7 * (24 * 60 * 60 * 1000));
                            this.setState({beginTime: beginTime, finishTime: finishTime});
                        }}
                                      fontSize={30}/>
                    </div>
                </div>


                <div className="stats_statsBox">
                    Stats2.
                </div>
                <div className="stats_statsBox">
                    Stats3.
                </div>
            </div>
        )
    }

    componentDidMount() {
        const callback = (data) => {
            this.setState({eventList: data},
                () => {
                    this.setState({isLoaded: true});
                })
        }
        const user = store.getState().user.userid.toString();
        getEvents({user: user}, callback);

        const today = new Date();
        let todayTime = today.getTime();
        const weekday = today.getDay() ? today.getDay() : 7;
        const beginTime = new Date(todayTime - (weekday - 1) * (24 * 60 * 60 * 1000));
        const finishTime = new Date(beginTime.getTime() + 6 * (24 * 60 * 60 * 1000));
        this.setState({beginTime: beginTime, finishTime: finishTime});

        const s1 = document.getElementById('stats1');
        this.chart = echart.init(s1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        BarChart(this.chart, this.state.eventList, this.state.beginTime, this.state.finishTime);
    }
}

export default Stats_StatsList