import {Dialog, TabBar} from 'antd-mobile'
import React from 'react'
import {StarOutline, AppOutline, PieOutline, UserOutline} from "antd-mobile-icons";
import {useHistory, useLocation} from 'react-router-dom'
import store from "../redux/Store";


export default function BottomBar() {
    const history = useHistory();
    const location = useLocation();
    const {pathname} = location;
    const hierarchy = {
        home: 1,
        stats: 2,
        discover: 3,
        mine: 4
    }
    const setRouteActive = value => {
        if (value === '/home' || value === '/mine' ||
                store.getState().user.isLogin)
            if (hierarchy[value.substring(1)] > hierarchy[pathname.substring(1)])
                history.push(value);
            else
                history.replace(value);
        else {
            Dialog.alert({
                content: "请登录",
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
