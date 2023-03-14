import React from 'react'
import {Selector, Tabs} from "antd-mobile";
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
        activekey: "event"
    }

    backAddr = '/home'
    goAddr = '/stats/details'

    capRender = () => {
        if (this.state.activekey === "event")
            return <div>
                <Stats_eventList eventlist={eventListDemo} goAddr={this.goAddr}/>
            </div>
        else
            return <div>
                {Stats_StatsList()}
            </div>
    }
    onCapChange = (activeKey) => {
        this.setState({activekey: activeKey})
    }

    render() {
        return (<div className="stats_body">
            <div className="stats_absoluteField">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title='回顾'/>
                <div className="stats_filterField">
                    <div className="stats_filterModeBox">
                        <Tabs onChange={this.onCapChange}>
                            <Tabs.Tab title="1" key="event">
                                <Selector columns={3} options={options}
                                          showCheckMark={false}
                                          multiple={true}
                                          className="stats_selectorBox"/>
                            </Tabs.Tab>
                            <Tabs.Tab title="2" key="stats"/>
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