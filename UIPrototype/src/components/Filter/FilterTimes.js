import React from "react";
import store from "../../redux/Store";
import FilterCalendar from "./FilterCalendar";
import {UndoOutline} from "antd-mobile-icons";
import {setTimeFrom, setTimeStatus, setTimeTo} from "../../redux/FilterActions";

class FilterTimes extends React.Component {
    setFilterTime = (type, time) => {
        store.dispatch(setTimeStatus(true));

        if (type === 'from') {
            store.dispatch(setTimeFrom(time));
            if (store.getState().filter.filterTimeTo == null && time == null) {
                store.dispatch(setTimeStatus(false));
            }
        } else if (type === 'to') {
            store.dispatch(setTimeTo(time));
            if (time == null && store.getState().filter.filterTimeFrom == null) {
                store.dispatch(setTimeStatus(false));
            }
        }

        this.props.onChange();
    }

    render() {
        return (
            <div className="stats_filterTimes">
                <div className="stats_timesTitle">时间</div>
                <div className="stats_timesRange">
                    从 &nbsp;&nbsp;
                    <FilterCalendar type="from"
                                    setFilterTime={this.setFilterTime.bind(this)}/>
                    &nbsp;&nbsp;
                    <UndoOutline onClick={this.setFilterTime.bind(this, 'from', null)}/> <br/>
                    到 &nbsp;&nbsp;
                    <FilterCalendar type="to"
                                    setFilterTime={this.setFilterTime.bind(this)}/>
                    &nbsp;&nbsp;
                    <UndoOutline onClick={this.setFilterTime.bind(this, 'to', null)}/>
                </div>
            </div>
        )
    }
}

export default FilterTimes;