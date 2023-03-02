import React from 'react'
import {NavBar, CapsuleTabs, Collapse, SwipeAction, Selector} from "antd-mobile";
import "./Stats.css"
import Stats_eventList from './Stats_EventList'

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

const eventList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


class Stats extends React.Component {
    state = {
        activekey: "cap1"
    }

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
                    <div className="navBarField">
                        <NavBar onBack={this.onClickBack} className="navBar">回顾</NavBar>
                    </div>
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