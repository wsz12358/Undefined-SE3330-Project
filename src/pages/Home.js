import React from 'react'
import './Home.css'
import {Button} from 'antd-mobile'
import {AddOutline, UndoOutline} from "antd-mobile-icons";
import Timer from "../utils/Timer";

class Home extends React.Component {
    state = {
        showsDate: true,
    }

    onTagBtnClick = () => {
        this.setState({showsDate: !this.state.showsDate});
    }
    renderDate = () => {
        if (this.state.showsDate) {
            return (<div className="home_noteBox">
                May your power brings rage.
            </div>)
        } else {
            return (<div className="home_dateBox">
                Dec. 12
            </div>)
        }
    }

    render() {
        return (<div className="home_body">
            <div className="home_avatarField">
                Title here.
                <div className="home_avatar">
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
                        fill='solid' color='primary'>
                    <AddOutline fontSize={30}/>
                </Button>
            </div>
        </div>);
        //TODO: your code here
    }
}

export default Home