import React from 'react'
import "./Discover.css"
import DiscoverCommentList from "./Comment";
import HeaderBar from "../../components/HeaderBar";
import OnClickRoute from "../../utils/OnClickRoute";

class Discover extends React.Component {
    backAddr = '/home'

    render() {
        return (<div className="discuv_body">
            <div className="discuv_head">
                <HeaderBar backFunc={OnClickRoute.bind(this, this.backAddr)} title="发现"/>
            </div>
            <div className="discuv_field">
                <div className='aaa'>
                    {DiscoverCommentList()}
                    {DiscoverCommentList()}
                    {DiscoverCommentList()}
                    {DiscoverCommentList()}
                </div>
                <div className="foot">
                    已经到底啦
                </div>
            </div>
        </div>);
    }
}

export default Discover