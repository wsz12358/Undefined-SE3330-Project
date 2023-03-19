import React from "react";
import store from "../../redux/Store";
import {Tabs} from "antd-mobile";
import {setCategory, setFilterOpen, setFromCalVis, setToCalVis} from "../../redux/FilterActions";
import FilterHeader from "./FilterHeader";
import FilterTags from "./FilterTags";
import FilterTimes from "./FilterTimes";

class Filter extends React.Component {
    onFilterGrow = (flag) => {
        const ret = store.getState().filterOpen;
        store.dispatch(setFilterOpen(!ret || flag));

        if (ret && flag)
            return;

        if (ret) {
            this.filter.classList.add('stats_filterAdd');
            this.filter.classList.remove('stats_filterRemove');
        } else {
            this.filter.classList.add('stats_filterRemove');
            this.filter.classList.remove('stats_filterAdd');
            store.dispatch(setToCalVis(false));
            store.dispatch(setFromCalVis(false));
        }
    }

    render() {
        return (
            <div className="stats_filterField" ref={(e) => this.filter = e}>
                <div className="stats_filterModeBox">
                    <Tabs onChange={(e) => {
                        store.dispatch(setCategory(e));
                        this.onFilterGrow(true);
                    }}>
                        <Tabs.Tab title="Events" key="event"/>
                        <Tabs.Tab title="Map" key="map"/>
                        <Tabs.Tab title="Stats" key="stats"/>
                    </Tabs>
                    <div style={{marginTop:10}}>
                        <FilterHeader filterGrow={this.onFilterGrow.bind(this, false)}/>
                        <FilterTags/>
                        <FilterTimes/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;