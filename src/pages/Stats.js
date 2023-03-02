import React from 'react'
import {NavBar, CapsuleTabs} from "antd-mobile";
import "./Stats.css"


class Stats extends React.Component {
    state = {
        activekey: "cap1"
    }

    capRender= () => {
        if (this.state.activekey === "cap1") return <div>fuck</div>
        else return <div>you</div>
    }
    onCapChange= (activeKey) => {
        this.setState({activekey: activeKey})
    }

    render() {
        return (<div>
            <div className="navBarField">
                <NavBar onBack={this.onClickBack} className="navBar">回顾</NavBar>
            </div>
            <div className="filterField">
                <div className="filterModeBox">
                    <CapsuleTabs onChange={this.onCapChange}>
                        <CapsuleTabs.Tab title="Yes" key="cap1">

                        </CapsuleTabs.Tab>
                        <CapsuleTabs.Tab title="No" key="cap2">

                        </CapsuleTabs.Tab>
                    </CapsuleTabs>
                    <div className="capRender">
                        {this.capRender()}
                    </div>
                </div>
            </div>
        </div>);
        //TODO: your code here
    }
}

export default Stats