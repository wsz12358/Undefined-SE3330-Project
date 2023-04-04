import React from "react";
import BMap from 'BMap'
import Marker from "../../components/MapMarker";
import {withRouter} from "react-router-dom";
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
        const flag = store.getState().filter.filterOpen;

        if (e && flag) {
            this.markerI.current.classList.add('markerShow');
        } else {
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
                    <Marker event={this.props.eventList[this.state.showIdx]}
                            setVis={() => this.setMarkerVis(false)}/>
                </div>
                <div id="address" style={{height: '100%', width: '100%', overflow: 'hidden'}}/>
            </div>

        )
    }

    componentDidMount() {
        const map = new BMap.Map("address");
        map.addControl(new BMap.MapTypeControl({
            mapTypes: [
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]
        }));
        map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
        map.addControl(new BMap.NavigationControl());
        map.enableScrollWheelZoom();

        const geolocation = new BMap.Geolocation();      // my location
        geolocation.getCurrentPosition((r) => {
            const mk = new BMap.Marker(r.point, {
                // 初始化五角星symbol
                icon: new BMap.Symbol(BMap_Symbol_SHAPE_STAR, {
                    scale: 1,
                    fillColor: "#1f1e33",
                    fillOpacity: 0.8,
                })
            });
            map.addOverlay(mk);
            map.centerAndZoom(r.point, 15);
            mk.addEventListener("click", () => {
                map.panTo(r.point);
                this.setMarkerVis(false);
            });
        }, {
            enableHighAccuracy: true,
        });

        this.props.eventList.map((e, idx) => {
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