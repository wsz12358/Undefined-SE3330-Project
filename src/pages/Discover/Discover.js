import React from 'react'
import {Space} from 'antd-mobile';
import "./Discover.css"
import DiscoverCommentList from "./comment";
class Discover extends React.Component {
    render() {
        return (<div className="disBody">
            <div className="head">
                head
            </div>
            <div className='aaa'>
                {DiscoverCommentList()}
                {DiscoverCommentList()}
                {DiscoverCommentList()}
                {DiscoverCommentList()}
            </div>

            <div className="foot">
                已经到底啦
            </div>
        </div>);
    }
}

export default Discover