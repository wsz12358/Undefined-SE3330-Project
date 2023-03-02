import React from 'react'
import './Home.css'
import {Button} from 'antd-mobile'
import {AddOutline, UndoOutline} from "antd-mobile-icons";
import moment from "moment"

class Home extends React.Component {
    state = {showsDate: true}

    onTagBtnClick = () => {
        this.setState({showsDate: !this.state.showsDate});
    }
    renderDate = () => {
        if (this.state.showsDate) {
            return (<div className="noteBox">
                May your power brings rage.
            </div>)
        } else {
            return (<div className="dateBox">
                Dec. 12
            </div>)
        }
    }

    render() {
        var _moment = moment().format('HH:mm:ss')

        return (<div className="body">
            <div className="avatarField">
                Title here.
                <div className="avatar">
                </div>
            </div>
            <div className="frontField">
                <div className="frontBox">
                    <div className="timeBox">
                        {_moment}
                    </div>
                    {this.renderDate()}
                </div>
                <Button className="tagBtn" shape='rounded' onClick={this.onTagBtnClick}>
                    <UndoOutline fontSize={18}/>
                </Button>
                <div className="countBox">
                    本月已记录<em>$0$</em>次
                </div>
                <Button block className="startBtn" size='large'
                        fill='solid' color='primary'>
                    <AddOutline fontSize={30}/>
                </Button>
            </div>
        </div>);
        //TODO: your code here
    }
}

export default Home