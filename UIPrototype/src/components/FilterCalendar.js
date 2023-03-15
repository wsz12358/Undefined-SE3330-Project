import React, {useState} from "react";
import {Button, Calendar, Popover} from "antd-mobile";

export default function FilterCalendar(props) {
    const [visible, setVisible] = useState(false)

    return (
        <Popover content={
            <Calendar selectionMode='single'
                      min={props.type === 'from' ? null : props.timeFrom}
                      max={props.type === 'to' ? null : props.timeTo}
                      value={props.type === 'from' ? props.timeFrom : props.timeTo}
                      onChange={val => {
                          console.log(val);
                          props.setFilterTime(props.type, val);
                          setVisible(v => !v);
                      }}/>}
                 placement='bottom-start'
                 visible={visible}>
            <Button onClick={() => {
                setVisible(v => !v)
            }}>
                {props.type === 'from' && (props.timeFrom === null ? '未选择' : props.timeFrom.toLocaleDateString()) ||
                    props.type === 'to' && (props.timeTo === null ? '未选择' : props.timeTo.toLocaleDateString())}
            </Button>
        </Popover>
    )
}