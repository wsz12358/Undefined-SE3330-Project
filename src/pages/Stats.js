import React from 'react'
import {NavBar, CapsuleTabs, Collapse, SwipeAction, Selector} from "antd-mobile";
import "./Stats.css"

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

]


class Stats extends React.Component {
    state = {
        activekey: "cap1"
    }

    capRender = () => {
        if (this.state.activekey === "cap1") return <div>fuck</div>
        else return <div>you</div>
    }
    onCapChange = (activeKey) => {
        this.setState({activekey: activeKey})
    }

    render() {
        return (<div>
            <div className="absoluteField">
                <div className="navBarField">
                    <NavBar onBack={this.onClickBack} className="navBar">回顾</NavBar>
                </div>
                <div className="filterField">
                    <div className="filterModeBox">
                        <CapsuleTabs onChange={this.onCapChange}>
                            <CapsuleTabs.Tab title="Yes" key="cap1">
                                <Selector columns={3} options={options}>

                                </Selector>
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title="No" key="cap2">

                            </CapsuleTabs.Tab>
                        </CapsuleTabs>
                        <div className="capRender">
                            {this.capRender()}
                        </div>

                    </div>
                </div>
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