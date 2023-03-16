import React from "react";
import store from "../../redux/Store";
import {UndoOutline} from "antd-mobile-icons";

class FilterHeader extends React.Component {
    setSiftText = () => {
        const tags = store.getState().filterTagStatus;
        const times = store.getState().filterTimeStatus;

        return (tags.length ?
            (times ? '混合筛选' : '按标签筛选: ' + store.getState().filterTagText) :
            (times ? '按时间筛选' : '显示所有'));
    }

    render() {
        return (
            <div className="stats_sift"
                 style={{position: 'relative'}}>
                {this.setSiftText()}
                <div className="stats_siftArrow"
                     style={{position: 'absolute', right: '10px', top: '0'}}
                     onClick={this.props.filterGrow}>
                    <UndoOutline/>
                </div>
            </div>
        )
    }
}

export default FilterHeader;