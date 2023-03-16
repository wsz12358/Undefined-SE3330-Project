import React from 'react'
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import Filter from "../../components/Filter/Filter";
import eventListDemo from "../../utils/EventListDemo";
import store from "../../redux/Store";


class Stats extends React.Component {
    backAddr = '/home'
    goAddr = '/stats/details'

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    capRender = () => {
        if (store.getState().category === "event")
            return (<Stats_eventList eventlist={eventListDemo} goAddr={this.goAddr}/>)
        else
            return (<Stats_StatsList/>)

    }

    render() {
        return (
            <div className="stats_body">
                <div className="stats_absoluteField">
                    <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)}
                               title='回顾'/>
                    <Filter/>
                </div>
                <div className="stats_capRenderField">
                    {this.capRender()}
                </div>
            </div>
        );
        //TODO: your code here
    }
}

export default Stats