import React from 'react'
import {CapsuleTabs, Selector} from "antd-mobile";
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import HeaderBar from "../../components/HeaderBar";
import OnClickBack from "../../utils/OnClickBack";

const options = [
    {
        label: 'Keep',
        value: '1',
    },
    {
        label: 'calm',
        value: '2',
    },
    {
        label: 'and',
        value: '3',
    },
    {
        label: 'carry',
        value: '4',
    },
    {
        label: 'on',
        value: '5',
    },
    {
        label: 'six',
        value: '6',
    },
]

const eventList = [{key: '1', date: 'Dec.12'}, {key: '2', date: 'Dec.11'}, {key: '3', date: 'Dec.6'},
    {key: '4', date: 'Dec.1'}, {key: '5', date: 'Nov.20'}, {key: '6', date: 'Nov.10'}, {key: '7', date: 'Nov.1'},
    {key: '8', date: 'Sept.9'}]

class Stats extends React.Component {
    state = {
        activekey: "cap1"
    }

    backAddr = '/home'

    capRender = () => {
        if (this.state.activekey === "cap1")
            return <div>
                {Stats_eventList(eventList)}
            </div>
        else return <div>you</div>
    }
    onCapChange = (activeKey) => {
        this.setState({activekey: activeKey})
    }

    render() {
        return (<div className="statsBody">
            <div className="absoluteFieldBox">
                <div className="absoluteField">
                    <HeaderBar backFunc={OnClickBack.bind(this)} title='回顾'/>
                    <div className="filterField">
                        <div className="filterModeBox">
                            <CapsuleTabs onChange={this.onCapChange}>
                                <CapsuleTabs.Tab title="Yes" key="cap1">
                                    <Selector columns={3} options={options}
                                              showCheckMark={false}
                                              multiple={true}
                                              className="selectorBox"/>
                                </CapsuleTabs.Tab>
                                <CapsuleTabs.Tab title="No" key="cap2">

                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </div>
                    </div>
                </div>
            </div>
            <div className="capRenderField">
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