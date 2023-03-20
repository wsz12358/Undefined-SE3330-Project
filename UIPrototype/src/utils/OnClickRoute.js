import store from "../redux/Store";
export default function OnClickRoute (routeAddr) {
    this.props.history.replace(routeAddr)
}