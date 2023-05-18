import {Mask, SpinLoading} from "antd-mobile";
import React from "react";

export default function BgMask (props) {
    return (
        <Mask visible={props.flag}>
            {props.type &&
                <div style={{
                height: '150px', width: '150px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', position: 'absolute',
                top: 'calc(50% - 75px)', left: 'calc(50% - 75px)',
            }}>
                <SpinLoading color='primary'/>
            </div>}
        </Mask>
    )
}