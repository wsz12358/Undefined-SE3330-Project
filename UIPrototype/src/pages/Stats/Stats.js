import React from 'react'
import "./Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import Stats_Map from "./Stats_Map";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import Filter from "../../components/Filter/Filter";
import eventListDemo from "../../utils/EventListDemo";
import store from "../../redux/Store";
import {setCategory, setFilterOpen} from "../../redux/FilterActions";


class Stats extends React.Component {
    backAddr = '/home'
    goAddr = '/stats/details'

    constructor(props) {
        super(props);
        store.dispatch(setFilterOpen(true));
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    capRender = () => {
        const category = store.getState().category;

        if (category === "map")
            return (<Stats_Map onClickRoute={OnClickRoute.bind(this, '/home')}/>)
        else if (category === "stats")
            return (<Stats_StatsList/>)
        else
            return (<Stats_eventList eventList={eventListDemo} goAddr={this.goAddr}/>)

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