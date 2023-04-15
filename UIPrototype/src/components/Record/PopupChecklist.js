import React, {useState} from 'react'
import {CheckList, Popup} from 'antd-mobile'
import {TagOutline} from "antd-mobile-icons";
import "../../css/Record.css"

const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function PChecklist() {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState([])

    return (
        <div id="popupChecklist">
            <div className="record_gadgets bordered"
                 style={{paddingTop: 15}}
                 onClick={() => {
                     setVisible(true)
                 }}>
                <TagOutline fontSize={40}/>
                <span>标签</span>
            </div>
            <Popup visible={visible}
                   onMaskClick={() => {
                       setVisible(false)
                   }}
                   destroyOnClose>
                <div>
                    <div style={{
                        textAlign: 'center', font: '700 20px/1.5 "Microsoft Yahei UI"',
                        padding: '10px 0'
                    }}>
                        选择标签
                    </div>
                    <div style={{
                        textAlign: 'center', font: '400 15px/1.5 "Microsoft YaHei UI"',
                        padding: '5px 0', backgroundColor: '#5ce077'
                    }}>
                        {selected.map((e) => {
                            return (
                                <span>{e} &nbsp;</span>
                            )
                        })}
                        {!selected.length && "无"}
                    </div>
                    <CheckList defaultValue={selected}
                               onChange={val => {
                                   setSelected(val)
                               }}
                               multiple>
                        {items.map(item => (
                            <CheckList.Item key={item} value={item}>
                                {item}
                            </CheckList.Item>
                        ))}
                    </CheckList>
                </div>
            </Popup>
        </div>
    )
}