import React from "react";
import BMap from 'BMap';
import Marker from "../../components/Map/MapMarker";
import {withRouter} from "react-router-dom";
import "../../css/Stats.css"
import store from "../../redux/Store";

class Stats_Map extends React.Component {
    constructor(props) {
        super(props);
        this.markerI = React.createRef();
        this.dealMarkers = deal_markers.bind(this);
    }

    state = {
        showIdx: 0,
        mapMarkers: [],
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
                    {this.props.eventList.length &&
                        <Marker event={this.props.eventList[this.state.showIdx]}
                                setVis={this.setMarkerVis.bind(this, false)}/>}
                </div>
                <div id="address" style={{height: 'calc(100% - 76px)', width: '100%', overflow: 'hidden'}}/>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.eventList.toString() !== this.props.eventList.toString())
            this.dealMarkers();
    }

    componentDidMount() {
        this.map = new window.BMap.Map("address");
        this.map.addControl(new window.BMap.MapTypeControl({
            mapTypes: [
                window.BMAP_NORMAL_MAP,
                window.BMAP_HYBRID_MAP
            ]
        }));
        this.map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
        this.map.addControl(new BMap.NavigationControl());
        this.map.enableScrollWheelZoom();

        const geolocation = new window.BMap.Geolocation();      // my location
        geolocation.getCurrentPosition((r) => {
            const mk = new window.BMap.Marker(r.point, {
                // 初始化五角星symbol
                icon: new window.BMap.Symbol(window.BMap_Symbol_SHAPE_STAR, {
                    scale: 1,
                    fillColor: "#4037d0",
                    fillOpacity: 0.8,
                })
            });
            this.map.addOverlay(mk);
            this.map.centerAndZoom(r.point, 15);
            mk.addEventListener("click", () => {
                this.map.panTo(r.point);
                this.setMarkerVis(false);
            });
        }, {
            enableHighAccuracy: true,
        });

        this.dealMarkers();
    }
}

function deal_markers () {
    this.state.mapMarkers.map((marker) => {
        this.map.removeOverlay(marker);
    })

    let temp = this.props.eventList.reduce((prev, curr, idx) => {
        const point = new window.BMap.Point(curr.mul, curr.lat);
        const marker = new window.BMap.Marker(point);
        prev.push(marker);

        this.map.addOverlay(marker);

        marker.addEventListener("click", () => {
            this.map.panTo(point);
            this.setState({showIdx: idx});
            this.setMarkerVis(true);
        })

        return prev;
    }, []);

    this.setState({mapMarkers: temp});
}

export default withRouter(Stats_Map);