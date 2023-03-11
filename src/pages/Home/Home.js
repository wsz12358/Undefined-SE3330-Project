import React from 'react'
import './Home.css'
import {Button} from 'antd-mobile'
import {AddOutline, UndoOutline} from "antd-mobile-icons";
import Timer from "../../utils/Timer";
import OnClickRoute from "../../utils/OnClickRoute";
import FocusUser from "../../utils/UserDemo";

class Home extends React.Component {
    state = {
        showsDate: true,
    }

    goAddr = '/mine'
    recordAddr = '/home/record'

    onTagBtnClick = () => {
        this.setState({showsDate: !this.state.showsDate});
    }
    renderDate = () => {
        if (this.state.showsDate) {
            return (<div className="home_noteBox">
                {FocusUser.facade_memo}
            </div>)
        } else {
            return (<div className="home_dateBox">
                Dec. 31
            </div>)
        }
    }

    render() {
        return (<div className="home_body">
            <div className="home_avatarField">
                Title here.
                <div className="home_avatar" onClick={OnClickRoute.bind(this, this.goAddr)}>
                </div>
            </div>
            <div className="home_frontField">
                <div className="home_frontBox">
                    <div className="home_timeBox">
                        <Timer/>
                    </div>
                    {this.renderDate()}
                </div>
                <Button className="home_tagBtn" shape='rounded' onClick={this.onTagBtnClick}>
                    <UndoOutline fontSize={18}/>
                </Button>
                <div className="home_countBox">
                    本月已记录<em>$0$</em>次
                </div>
                <Button className="home_startBtn" size='large'
                        fill='solid' color='primary'
                        onClick={OnClickRoute.bind(this, this.recordAddr)}>
                    <AddOutline fontSize={30}/>
                </Button>
            </div>
        </div>);
        //TODO: your code here
    }
}

export default Home