import React from "react";
import {Button, Calendar, Popover} from "antd-mobile";
import store from "../../redux/Store";
import {setFromCalVis, setToCalVis} from "../../redux/FilterActions";

export default function FilterCalendar(props) {
    const isFrom = props.type === 'from';
    const visible = isFrom ? store.getState().filter.fromCalVis : store.getState().filter.toCalVis;
    const timeFrom = store.getState().filter.filterTimeFrom;
    const timeTo = store.getState().filter.filterTimeTo;

    return (
        <Popover content={
            <Calendar selectionMode='single'
                      min={isFrom ? null : timeFrom}
                      max={!isFrom ? null : timeTo}
                      value={isFrom ? timeFrom : timeTo}
                      onChange={val => {
                          console.log(val);
                          props.setFilterTime(props.type, val);
                          isFrom ? store.dispatch(setFromCalVis(!visible)) :
                              store.dispatch(setToCalVis(!visible))
                      }}/>}
                 placement='bottom-start'
                 visible={visible}>
            <Button onClick={() => {
                isFrom ? store.dispatch(setFromCalVis(!visible)) :
                    store.dispatch(setToCalVis(!visible))
            }}>
                {isFrom && (timeFrom === null ? '未选择' : timeFrom.toLocaleDateString()) ||
                    !isFrom && (timeTo === null ? '未选择' : timeTo.toLocaleDateString())}
            </Button>
        </Popover>
    )
}