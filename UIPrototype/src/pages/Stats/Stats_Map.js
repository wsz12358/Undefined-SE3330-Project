import React from "react";
import BMap from 'BMap'
import Marker from "../../components/MapMarker";
import {withRouter} from "react-router-dom";
import data from '../../utils/EventListDemo'

class Stats_Map extends React.Component {
    state = {
        showInfo: false,
        showIdx: 0,
    }

    setMarkerVis = (e) => {
        this.setState({showInfo: e});
    }

    transitDetail = () => {

    }

    render() {
        return (
            <div style={{
                height: '100%', width: '100%',
                position: 'relative'
            }}>
                {this.state.showInfo &&
                    <div className="markerInfoBox"
                         style={{
                             position: 'absolute', top: '50px',
                             zIndex: 3, height: '200px', width: '100%'
                         }}>
                        <Marker event={data[this.state.showIdx]}
                                setVis={this.setMarkerVis.bind(this)}/>
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