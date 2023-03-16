import React from "react";
import {UndoOutline} from "antd-mobile-icons";
import {Selector} from "antd-mobile";
import store from "../../redux/Store";
import {setTagStatus, setTagText} from "../../redux/FilterActions";

const options = [{label: 'Label1', value: '1',}, {label: 'Label2', value: '2',}, {label: 'Label3', value: '3',},
    {label: 'Label4', value: '4',}, {label: 'Label5', value: '5',}, {label: 'Label6', value: '6',},]

class FilterTags extends React.Component {
    onTagReset = () => {
        store.dispatch(setTagText(''));
        store.dispatch(setTagStatus([]))
    }

    onTagSelectorChange = (arr, extend) => {
        const items = extend.items;
        const temp = items.length > 1 ? '多个' :
            items.length ? items[0].value : '';

        store.dispatch(setTagText(temp));
        store.dispatch(setTagStatus(arr));
    }

    render() {
        return(
            <div className="stats_filterTags">
                <div className="stats_tagsTitle">标签</div>
                <div className="stats_tagsReset"
                     onClick={this.onTagReset}>
                    {/*TODO: deal with the visibility of the calendar*/}

                    <UndoOutline/>
                </div>
                <div className="stats_tagsSelector">
                    <Selector columns={2} options={options}
                              showCheckMark={false}
                              multiple={true}
                              className="stats_selectorBox"
                              value={store.getState().filterTagStatus}
                              onChange={this.onTagSelectorChange}/>
                </div>
            </div>
        )
    }
}

export default FilterTags;