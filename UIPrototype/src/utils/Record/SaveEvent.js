import {addEvent} from "../../service/loginService";
import store from "../../redux/Store";
import moment from "moment"
import BMap from 'BMap';

export default function SaveEvent(props, callback) {
    const geolocation = new window.BMap.Geolocation();      // my location
    let p;
    geolocation.getCurrentPosition((r) => {
        p = r.point;
        addEvent({
            name: store.getState().user.username,
            tags: props.select.join("/"),
            begintime: props.beginTime,
            finishtime: moment(new Date().getTime()).format('YYYY/MM/DD/HH/mm/ss'),
            duration: props.durTime.toString(),
            user: store.getState().user.userid.toString(),
            mul: p.lng.toString(),
            lat: p.lat.toString(),
        }, callback);
    });
}