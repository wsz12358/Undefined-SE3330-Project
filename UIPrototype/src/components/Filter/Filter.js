import React from "react";
import store from "../../redux/Store";
import {Tabs} from "antd-mobile";
import {setCategory, setFilterOpen, setFromCalVis, setToCalVis} from "../../redux/FilterActions";
import FilterHeader from "./FilterHeader";
import FilterTags from "./FilterTags";
import FilterTimes from "./FilterTimes";

class Filter extends React.Component {
    onFilterGrow = (flag) => {
        const ret = store.getState().filter.filterOpen;
        store.dispatch(setFilterOpen(!ret || flag));

        if (ret && flag)
            return;

        if (ret) {
            this.filter.classList.add('filterAdd');
            this.filter.classList.remove('filterRemove');
        } else {
            this.filter.classList.add('filterRemove');
            this.filter.classList.remove('filterAdd');
            store.dispatch(setToCalVis(false));
            store.dispatch(setFromCalVis(false));
        }
    }

    render() {
        const category = store.getState().filter.category;

        return (
            <div id="filterField" ref={(e) => this.filter = e}>
                <div id="filterModeBox">
                    <Tabs onChange={(e) => {
                        store.dispatch(setCategory(e));
                        this.onFilterGrow(true);
                    }}
                          activeKey={store.getState().filter.category}>
                        <Tabs.Tab title="Events" key="event"/>
                        <Tabs.Tab title="Map" key="map"/>
                        <Tabs.Tab title="Stats" key="stats"/>
                    </Tabs>

                    {category !== 'stats' &&
                        <div style={{marginTop: 10}}>
                            <FilterHeader filterGrow={this.onFilterGrow.bind(this, false)}/>
                            <FilterTags onChange={this.props.onChange}/>
                            <FilterTimes onChange={this.props.onChange}/>
                        </div>}
                    {category === 'stats' &&
                        <div style={{marginTop: 10}} className="stats_sift">
                            时长统计
                        </div>}
                </div>
            </div>
        )
    }
}

export default Filter;