import {TabBar} from 'antd-mobile'
import React from 'react'
import {StarOutline, AppOutline, PieOutline, UserOutline} from "antd-mobile-icons";
import {useHistory, useLocation} from 'react-router-dom'


export default function BottomBar() {
    const history = useHistory();
    const location = useLocation();
    const {pathname} = location;
    const setRouteActive = value => history.push(value);

    const tabs = [
        {
            key: '/home',
            icon: <AppOutline />,
        },
        {
            key: '/stats',
            icon: <PieOutline />,
        },
        {
            key: '/discover',
            icon: <StarOutline />,
        },
        {
            key: '/mine',
            icon: <UserOutline />,
        },
    ];
    return (
        <TabBar activeKey={pathname}
                onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon}/>
            ))}
        </TabBar>
    );
}
