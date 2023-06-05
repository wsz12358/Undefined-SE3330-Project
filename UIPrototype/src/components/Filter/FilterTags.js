import React from "react";
import {UndoOutline} from "antd-mobile-icons";
import {Selector} from "antd-mobile";
import store from "../../redux/Store";
import {setTagStatus, setTagText} from "../../redux/FilterActions";

const options = [{label: '学习', value: '学习',}, {label: '工作', value: '工作',}, {label: '运动', value: '运动',},
    {label: '社交', value: '社交',}, {label: '休闲', value: '休闲',}, {label: '其他', value: '其他',},]

class FilterTags extends React.Component {
    onTagReset = () => {
        store.dispatch(setTagText(''));
        store.dispatch(setTagStatus([]))
        this.props.onChange();
    }

    onTagSelectorChange = (arr, extend) => {
        const items = extend.items;
        const temp = items.length > 1 ? '多个' :
            items.length ? items[0].value : '';

        store.dispatch(setTagText(temp));
        store.dispatch(setTagStatus(arr));
        console.log(arr);
        this.props.onChange();
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
                              value={store.getState().filter.filterTagStatus}
                              onChange={this.onTagSelectorChange}/>
                </div>
            </div>
        )
    }
}

export default FilterTags;