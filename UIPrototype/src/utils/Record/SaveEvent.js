import {addEvent} from "../../service/loginService";
import store from "../../redux/Store";
import moment from "moment"
import BMap from 'BMap';

export default function SaveEvent(props, callback) {
    let d1 = props.startTime;
    let d2 = new Date().getTime();
    let dt = Math.abs(d2 - d1);
    let durT = props.durTime + Math.floor(dt / 1000);

    const geolocation = new window.BMap.Geolocation();      // my location
    let p;
    geolocation.getCurrentPosition((r) => {
        p = r.point;
        addEvent({
            name: store.getState().user.username,
            tags: props.select.join("/"),
            begintime: props.beginTime,
            finishtime: moment(d2).format('YYYY/MM/DD/HH/mm/ss'),
            duration: durT.toString(),
            user: store.getState().user.userid.toString(),
            mul: p.lng.toString(),
            lat: p.lat.toString(),
        }, callback);
    });
}