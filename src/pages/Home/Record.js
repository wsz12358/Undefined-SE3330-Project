import React from 'react'
import './Record.css'
import OnClickRoute from "../../utils/OnClickRoute";

class Record extends React.Component {
    backAddr = '/home'

    render() {
        return (
            <div className="record_body" onClick={OnClickRoute.bind(this, this.backAddr)}>
                {/*TODO: Your code here.*/}
            </div>
        );
    }
}

export default Record;