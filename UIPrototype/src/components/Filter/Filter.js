import React from "react";
import store from "../../redux/Store";
import {Tabs} from "antd-mobile";
import {setCategory, setFilterOpen, setFromCalVis, setToCalVis} from "../../redux/FilterActions";
import FilterHeader from "./FilterHeader";
import FilterTags from "./FilterTags";
import FilterTimes from "./FilterTimes";

class Filter extends React.Component {
    onFilterGrow = () => {
        const ret = store.getState().filterOpen;
        store.dispatch(setFilterOpen(!ret))

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
                        store.dispatch(setCategory(e))
                    }}>
                        <Tabs.Tab title="Events" key="event">
                            <FilterHeader filterGrow={this.onFilterGrow.bind(this)}/>
                            <FilterTags/>
                            <FilterTimes/>
                        </Tabs.Tab>
                        <Tabs.Tab title="Statistics" key="stats"/>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Filter;