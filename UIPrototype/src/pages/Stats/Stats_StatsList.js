import React from "react";
import {getEvents} from "../../service/loginService";
import store from "../../redux/Store";
import BarChart from "../../components/BarChart";
import * as echart from "echarts";
import {LeftOutline, RightOutline} from "antd-mobile-icons";
import StatsHeader from "../../components/StatsHeader";
import PieChart from "../../components/PieChart";

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
                <StatsHeader beginTime={this.state.beginTime}
                             finishTime={this.state.finishTime}
                             setState={this.setState.bind(this)}/>

                <div className="stats_statsBox">
                    <div style={{fontSize: '20px', textAlign: 'center'}}>
                        一周内时长统计（秒）
                    </div>

                    <div style={{width: '100%', height: '100%'}} id="stats1"/>
                </div>


                <div className="stats_statsBox">
                    <div style={{fontSize: '20px', textAlign: 'center'}}>
                        一周内标签统计（秒）
                    </div>

                    <div style={{width: '100%', height: '100%'}} id="stats2"/>
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
        this.chart1 = echart.init(s1);

        const s2 = document.getElementById('stats2');
        this.chart2 = echart.init(s2);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        BarChart(this.chart1, this.state.eventList, this.state.beginTime, this.state.finishTime);
        PieChart(this.chart2, this.state.eventList, this.state.beginTime, this.state.finishTime);
    }
}

export default Stats_StatsList