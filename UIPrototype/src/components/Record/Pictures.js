import {PicturesOutline} from "antd-mobile-icons";
import React, {useRef, useState} from "react";
import {ActionSheet} from "antd-mobile";

export default function Pictures(props) {
    const [visible, setVisible] = useState(false);
    const actions = [
        {text: '从相册中上传', key: 'upload'},
        {text: '摄像头拍摄', key: 'camera'},
    ]
    const upload = useRef(null);

    const onUpload = () => {
        const file = upload.current.files
        const reader = new FileReader();

        reader.readAsDataURL(file[0]);
        reader.onload = () => {
            props.addMsg(reader.result, true, "img");
        }

    }

    return (
        <>
            <div className="record_gadgets bordered"
                 style={{paddingTop: 15}}
                 onClick={() => setVisible(true)}>
                <PicturesOutline fontSize={40}/>
                <span>图片</span>
            </div>
            <input type="file" accept="image/*" ref={upload}
                   style={{position: "absolute", width: 0, height: 0}}
                   onChange={onUpload}/>
            <ActionSheet
                visible={visible}
                actions={actions}
                onClose={() => setVisible(false)}
                onAction={action => {
                    if (action.key === "upload") {
                        upload.current.click();
                    }
                }}/>
        </>
    )
}