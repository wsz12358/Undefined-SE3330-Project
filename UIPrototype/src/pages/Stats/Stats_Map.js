import React from "react";
import BMap from 'BMap'
import Marker from "../../components/MapMarker";
import {withRouter} from "react-router-dom";
import data from '../../utils/EventListDemo'
import "./Stats.css"
import store from "../../redux/Store";

class Stats_Map extends React.Component {
    constructor(props) {
        super(props);
        this.markerI = React.createRef();
    }
    state = {
        showIdx: 0,
    }

    setMarkerVis = (e) => {
        const flag = store.getState().filterOpen;

        if (e && flag) {
            this.markerI.current.classList.add('markerShow');
        }
        else {
            this.markerI.current.classList.remove('markerShow');
        }
    }

    render() {
        return (
            <div style={{
                height: '100%', width: '100%',
                position: 'relative'
            }}>
                <div className="markerInfoBox" ref={this.markerI}>
                    <Marker event={data[this.state.showIdx]}
                            setVis={() => this.setMarkerVis(false)}/>
                </div>
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
                this.setState({showIdx: idx});
                this.setMarkerVis(true);
            })
        })
    }
}

export default withRouter(Stats_Map);