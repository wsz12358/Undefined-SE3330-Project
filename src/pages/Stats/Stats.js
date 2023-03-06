import React from 'react'
import {CapsuleTabs, Selector} from "antd-mobile";
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import eventListDemo from "../../utils/EventListDemo";

const options = [{label: 'Keep', value: '1',}, {label: 'calm', value: '2',}, {label: 'and', value: '3',},
    {label: 'carry', value: '4',}, {label: 'on', value: '5',}, {label: 'six', value: '6',},]


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
            <div className="stats_absoluteFieldBox">
                <div className="stats_absoluteField">
                    <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title='回顾'/>
                    <div className="stats_filterField">
                        <div className="stats_filterModeBox">
                            <CapsuleTabs onChange={this.onCapChange}>
                                <CapsuleTabs.Tab title="Yes" key="event">
                                    <Selector columns={3} options={options}
                                              showCheckMark={false}
                                              multiple={true}
                                              className="stats_selectorBox"/>
                                </CapsuleTabs.Tab>
                                <CapsuleTabs.Tab title="No" key="stats">

                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </div>
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