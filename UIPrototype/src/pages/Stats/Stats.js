import React from 'react'
import {Selector, Tabs} from "antd-mobile";
import {UndoOutline} from "antd-mobile-icons";
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import FilterCalendar from "../../components/FilterCalendar";
import eventListDemo from "../../utils/EventListDemo";

const options = [{label: 'Label1', value: '1',}, {label: 'Label2', value: '2',}, {label: 'Label3', value: '3',},
    {label: 'Label4', value: '4',}, {label: 'Label5', value: '5',}, {label: 'Label6', value: '6',},]


class Stats extends React.Component {
    state = {
        category: "event",
        filterOpen: true,
        filterTagStatus: [],
        filterTimeStatus: false,
        filterTimeFrom: null,
        filterTimeTo: null,
    }

    backAddr = '/home'
    goAddr = '/stats/details'
    filterTagBuf = []
    //siftTextBuf = ''

    capRender = () => {
        if (this.state.category === "event")
            return <div>
                <Stats_eventList eventlist={eventListDemo} goAddr={this.goAddr}/>
            </div>
        else
            return <div>
                {Stats_StatsList()}
            </div>
    }
    onCapChange = (activeKey) => {
        this.setState({category: activeKey})
    }

    onFilterGrow = () => {
        this.setState({filterOpen: !this.state.filterOpen});

        if (this.state.filterOpen) {
            this.filter.classList.add('stats_filterAdd');
            this.filter.classList.remove('stats_filterRemove');
        } else {
            this.filter.classList.add('stats_filterRemove');
            this.filter.classList.remove('stats_filterAdd');
        }
    }

    onTagSelectorChange = (arr, extend) => {
        const items = extend.items;
        const tags = [];

        items.map((e) => {
            tags.push({value: e.value});
        })

        this.filterTagText = items.length > 1 ? '多个' :
            items.length ? items[0].value : '';
        this.filterTagBuf = arr;

        this.setState({filterTagStatus: tags});
    }

    onTagReset = () => {
        this.filterTagText = '';
        this.filterTagBuf = [];
        this.setState({filterTagStatus: []});
    }

    setFilterTime = (type, time) => {
        this.setState({filterTimeStatus: true});

        if (type === 'from') {
            this.setState({filterTimeFrom: time},
                () => {
                    if (this.state.filterTimeTo == null && this.state.filterTimeFrom == null) {
                        this.setState({filterTimeStatus: false});
                    }
                })
        } else if (type === 'to') {
            this.setState({filterTimeTo: time},
                () => {
                    if (this.state.filterTimeTo == null && this.state.filterTimeFrom == null) {
                        this.setState({filterTimeStatus: false});
                    }
                })
        }
    }

    setSiftText = () => {
        return (this.state.filterTagStatus.length ?
            ((this.state.filterTimeStatus) ? '混合筛选' : '按标签筛选: ' + this.filterTagText) :
            ((this.state.filterTimeStatus) ? '按时间筛选' : '显示所有'));
    }

    render() {
        return (<div className="stats_body">
            <div className="stats_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title='回顾'/>
                <div className="stats_filterField"
                     ref={(e) => {
                         this.filter = e
                     }}>
                    <div className="stats_filterModeBox">
                        <Tabs onChange={this.onCapChange}>
                            <Tabs.Tab title="Events" key="event">
                                <div className="stats_sift"
                                     style={{position: 'relative'}}>
                                    {this.setSiftText()}
                                    <div className="stats_siftArrow"
                                         style={{position: 'absolute', right: '10px', top: '0'}}
                                         onClick={this.onFilterGrow}>
                                        <UndoOutline/>
                                    </div>
                                </div>
                                <div className="stats_filterTags">
                                    <div className="stats_tagsTitle">标签</div>
                                    <div className="stats_tagsReset"
                                         onClick={this.onTagReset}>
                                        {/*TODO: deal with the visibility of the calendar*/}

                                        <UndoOutline/>
                                    </div>
                                    <div className="stats_tagsSelector">
                                        <Selector columns={2} options={options}
                                                  showCheckMark={false}
                                                  multiple={true}
                                                  className="stats_selectorBox"
                                                  value={this.filterTagBuf}
                                                  onChange={this.onTagSelectorChange}/>
                                    </div>
                                </div>
                                <div className="stats_filterTimes">
                                    <div className="stats_timesTitle">时间</div>
                                    <div className="stats_timesRange">
                                        从 &nbsp;&nbsp;
                                        <FilterCalendar type="from"
                                                        timeFrom={this.state.filterTimeFrom}
                                                        timeTo={this.state.filterTimeTo}
                                                        setFilterTime={this.setFilterTime.bind(this)}/>
                                        &nbsp;&nbsp; <UndoOutline onClick={this.setFilterTime.bind(this, 'from', null)}/> <br/>
                                        到 &nbsp;&nbsp;
                                        <FilterCalendar type="to"
                                                        timeFrom={this.state.filterTimeFrom}
                                                        timeTo={this.state.filterTimeTo}
                                                        setFilterTime={this.setFilterTime.bind(this)}/>
                                        &nbsp;&nbsp; <UndoOutline onClick={this.setFilterTime.bind(this, 'to', null)}/>
                                    </div>
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab title="Statistics" key="stats"/>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="stats_capRenderField">
                {this.capRender()}
            </div>
        </div>);
        //TODO: your code here
    }
}

export default Stats