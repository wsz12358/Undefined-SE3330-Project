import React from "react";
import BMap from 'BMap'
import {Button} from "antd-mobile";
import OnClickRoute from "../../utils/OnClickRoute";
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";
import data from '../../utils/EventListDemo'

class Stats_Map extends React.Component {
    state = {
        showInfo: false,
        showIdx: 0,
    }

    render() {
        return (
            <div style={{
                height: '100%', width: '100%',
                position: 'relative'
            }}>
                {this.state.showInfo &&
                    <div className="markerInfo"
                         style={{
                             height: '100px', width: '100%', backgroundColor: 'red',
                             position: 'absolute', top: '100px', zIndex: 3
                         }}>
                        {data[this.state.showIdx].lat}, {data[this.state.showIdx].mul}
                        <Button onClick={() => {
                            this.props.history.push('/home')
                        }}>
                            Click
                        </Button>
                    </div>}
                <div id="address" style={{height: '100%', width: '100%', overflow: 'hidden'}}/>
            </div>

        )
    }

    componentDidMount() {
        const map = new BMap.Map("address");
        map.centerAndZoom(new BMap.Point(121.44329, 31.03201), 15);
        map.addControl(new BMap.MapTypeControl({
            mapTypes: [
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]
        }));
        map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
        map.addControl(new BMap.NavigationControl());

        data.map((e, idx) => {
            const point = new BMap.Point(e.lat, e.mul);
            const marker = new BMap.Marker(point);
            map.addOverlay(marker);

            marker.addEventListener("click", () => {
                map.panTo(point);
                this.setState({showInfo: true, showIdx: idx});
            })
        })
    }
}

export default withRouter(Stats_Map);