export default function OnClickRoute (routeAddr, type) {
    if (type === "push")
        this.props.history.push(routeAddr);
    else if (type === "pop")
        this.props.history.goBack();
    else if (type === "replace")
        this.props.history.replace(routeAddr);
}