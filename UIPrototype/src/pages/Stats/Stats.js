import React from 'react'
import "../../css/Stats.css"
import Stats_eventList from './Stats_EventList'
import Stats_StatsList from "./Stats_StatsList";
import Stats_Map from "./Stats_Map";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";
import Filter from "../../components/Filter/Filter";
import store from "../../redux/Store";
import {setFilterOpen} from "../../redux/FilterActions";
import GotoTop from "../../components/GotoTop";
import {getEvents} from "../../service/loginService";
import eventListDemo from "../../utils/EventListDemo";

class Stats extends React.Component {
    state = {
        eventList: [],
        isLoaded: false,
    }

    backAddr = '/home'
    goAddr = '/stats/details'

    constructor(props) {
        super(props);
        store.dispatch(setFilterOpen(true));
        this.capRenderField = React.createRef();
        this.refreshEventList();
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    refreshEventList = () => {
        const callback = (e) => {
            this.setState({eventList: [...e]},
                () => {
                    this.setState({isLoaded: true})
                });
        }

        getEvents({user: store.getState().user.userid.toString()}, callback);
    }

    capRender = () => {
        const category = store.getState().filter.category;

        if (category === "map")
            return (
                <Stats_Map onClickRoute={OnClickRoute.bind(this, '/home', "pop")}
                           eventList={this.state.eventList}/>
            )
        else if (category === "stats")
            return (
                <Stats_StatsList/>
            )
        else if (category === "event")
            return (
                <Stats_eventList eventList={this.state.eventList}
                                 goAddr={this.goAddr}/>
            )

    }

    render() {
        const category = store.getState().filter.category;

        return (
            <div id="stats_body">
                {!this.state.isLoaded && <div>Loading</div>}
                {this.state.isLoaded &&
                    <>
                        <div id="stats_absoluteField">
                            <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr, "replace")}
                                       title='回顾'/>

                            <div id="stats_filterField" className="alpha_bg"
                                 style={{width: '100%', padding: '10px 0'}}>
                                <Filter onChange={this.refreshEventList.bind(this)}/>
                            </div>
                        </div>

                        {category === "event" && <GotoTop object="stats_capRenderField"/>}

                        <div id="stats_capRenderField" className="alpha_bg"
                             ref={this.capRenderField}>
                            {this.capRender()}
                        </div>
                    </>}
            </div>
        );
        //TODO: your code here
    }
}

export default Stats