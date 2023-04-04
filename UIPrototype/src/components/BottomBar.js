import {Dialog, TabBar} from 'antd-mobile'
import React from 'react'
import {StarOutline, AppOutline, PieOutline, UserOutline} from "antd-mobile-icons";
import {useHistory, useLocation} from 'react-router-dom'
import store from "../redux/Store";


export default function BottomBar() {
    const history = useHistory();
    const location = useLocation();
    const {pathname} = location;
    const setRouteActive = value => {
        if (value === '/home' || value === '/mine' ||
                store.getState().user.isLogin)
            history.push(value)
        else {
            Dialog.alert({
                content: "Please go login.",
            });
        }
    };

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline/>
        },
        {
            key: '/stats',
            title: '回顾',
            icon: <PieOutline/>,
        },
        {
            key: '/discover',
            title: '发现',
            icon: <StarOutline/>,
        },
        {
            key: '/mine',
            title: '我的',
            icon: <UserOutline/>,
        },
    ];

    return (
        <TabBar activeKey={pathname}
                onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
            ))}
        </TabBar>
    );
}
