import React from "react";
import BMap from 'BMap'
import {Button} from "antd-mobile";
import OnClickRoute from "../../utils/OnClickRoute";
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";

class Stats_Map extends React.Component {
    render() {
        return (
            <div style={{
                height: '100%', width: '100%',
                position: 'relative'
            }}>
                <div className="markerInfo" ref={e => this.markerInfo = e}
                     style={{
                         height: '100px', width: '100%', backgroundColor: 'red',
                         position: 'absolute', top: '100px', zIndex: 3
                     }}>
                    FUckyou
                    <Button onClick={() => {this.props.history.push('/home')}}>
                        nimabi
                    </Button>
                </div>
                <div id="address" style={{height: '100%', width: '100%', overflow: 'hidden'}}/>
            </div>

        )
    }

    componentDidMount() {
        this.markerInfo.className = 'stats_markInfoHide';

        const map = new BMap.Map("address"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(121.44329, 31.03201), 15); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl({
            mapTypes: [
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]
        }));
        map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
        map.addControl(new BMap.NavigationControl());

        const point = new BMap.Point(121.44329, 31.03201);
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);

        marker.addEventListener("click", (e) => {
            map.panTo(point);
            // this.setState({showInfo: true});
            this.markerInfo.className = 'stats_markInfoShow';
        })

        const point2 = new BMap.Point(121.44329, 31.04201);
        const marker2 = new BMap.Marker(point2);
        map.addOverlay(marker2);

        marker2.addEventListener("click", (e) => {
            map.panTo(point2);
            // this.setState({showInfo: true})
            this.markerInfo.className = 'stats_markInfoShow';
        })
    }
}

export default withRouter(Stats_Map);