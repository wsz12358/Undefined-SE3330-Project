import React from 'react'
import {Selector, Tabs} from "antd-mobile";
import {UndoOutline} from "antd-mobile-icons";
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import eventListDemo from "../../utils/EventListDemo";

const options = [{label: 'Label1', value: '1',}, {label: 'Label2', value: '2',}, {label: 'Label3', value: '3',},
    {label: 'Label4', value: '4',}, {label: 'Label5', value: '5',}, {label: 'Label6', value: '6',},]


class Stats extends React.Component {
    state = {
        category: "event",
        filterOpen: true,
        filterTagStatus: [],
        filterTimeStatus: []
    }

    backAddr = '/home'
    goAddr = '/stats/details'
    filterTagBuf = []

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
                                    {this.state.filterTagStatus.length ?
                                        (this.state.filterTimeStatus.length ? '混合' : '标签: ' + this.filterTagText) :
                                        (this.state.filterTimeStatus.length ? '时间: ' : '所有')}
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


// <Collapse defaultActiveKey={['1']}>
//     <Collapse.Panel key='1' title='第一项'>
//     <SwipeAction
// key="a"
// rightActions={[{
//             key: 'unsubscribe',
//             text: '取消关注',
//             color: 'light',
//         }]}>
//     AAA
//     </SwipeAction>
// </Collapse.Panel>
// <Collapse.Panel key='2' title='第二项'>
//     BBB.
// </Collapse.Panel>
// </Collapse>