import {NavBar} from 'antd-mobile'
import React from 'react'
import './UniStyle.css'

export default function HeaderBar(props) {
    const {title, backFunc, right} = props;
    return (
        <div className="navBarField">
            <NavBar onBack={backFunc} right={right} className="navBar">{title}</NavBar>
        </div>
    )
}
