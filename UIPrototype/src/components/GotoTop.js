import React from "react";
import {UpOutline} from "antd-mobile-icons";

export default function GotoTop(props) {
    return (
        <div id="gotoTop"
             onClick={() => {
                 document.getElementById(props.object).scrollTo({top: 0, behavior: 'smooth'});
             }}>
            <UpOutline fontSize={40}/>
        </div>
    )
}