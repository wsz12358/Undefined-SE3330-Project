import React from 'react'
import HeaderBar from "../../components/HeaderBar";
import OnClickBack from "../../utils/OnClickBack";
import './Details.css'

class Details extends React.Component {
    backAddr = '/stats'

    render() {
        return (<div className="detailBody">
            <div className="detail_absoluteField">
                <HeaderBar backFunc={OnClickBack.bind(this)} title="详细"/>
            </div>
            Clicked event{this.props.location.state.id}.
        </div>)
    }
}

export default Details