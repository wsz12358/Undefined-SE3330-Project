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
import {setFilterOpen} from "../../redux/FilterActions";
import {UpOutline} from "antd-mobile-icons";
import GotoTop from "../../components/GotoTop";

class Stats extends React.Component {
    backAddr = '/home'
    goAddr = '/stats/details'

    constructor(props) {
        super(props);
        store.dispatch(setFilterOpen(true));
        this.capRenderField = React.createRef();
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    capRender = () => {
        const category = store.getState().filter.category;

        if (category === "map")
            return (
                <Stats_Map onClickRoute={OnClickRoute.bind(this, '/home', "pop")}
                           eventList={eventListDemo}/>
            )
        else if (category === "stats")
            return (<Stats_StatsList/>)
        else
            return (
                <Stats_eventList eventList={eventListDemo}
                                 goAddr={this.goAddr}/>
            )

    }

    render() {
        const category = store.getState().filter.category;

        return (
            <div id="stats_body">
                <div id="stats_absoluteField">
                    <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr, "replace")}
                               title='回顾'/>

                    <div id="stats_filterField" className="alpha_bg"
                         style={{width: '100%', padding: '10px 0'}}>
                        <Filter/>
                    </div>
                </div>

                {category === "event" && <GotoTop object="stats_capRenderField"/>}

                <div id="stats_capRenderField" className="alpha_bg"
                     ref={this.capRenderField}>
                    {this.capRender()}
                </div>
            </div>
        );
        //TODO: your code here
    }
}

export default Stats