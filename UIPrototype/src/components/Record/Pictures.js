import React, {useRef, useState} from "react";
import {ActionSheet} from "antd-mobile";
import {PicturesOutline} from "antd-mobile-icons";
import HandleImageUpload from "../../utils/Record/HandleImageUpload";
import Camera from "./Camera";


const Pictures = (props) => {
    const [visible, setVisible] = useState(false);
    const [isCamera, setIsCamera] = useState(false);
    const fileInputRef = useRef();

    const actions = [
        {text: "从相册中上传", key: "upload"},
        {text: "摄像头拍摄", key: "camera"},
    ];

    const handleFileInputChange = (e) => {
        props.setUploading(true);  // start uploading, must not be interrupted
        props.addMsg("", "pend");  // add a fake message for loading
        const file = e.target.files[0];
        HandleImageUpload(file, props.collect, props.addMsg);  // and then upload
    };

    return (
        <>
            <div className="record_gadgets bordered"
                 style={{paddingTop: 15}}
                 onClick={() => setVisible(true)}>
                <PicturesOutline fontSize={40}/>
                <span>图片</span>
            </div>
            <input type="file"
                   ref={fileInputRef}
                   style={{display: "none"}}
                   accept="image/*"
                   onChange={handleFileInputChange}
            />
            <ActionSheet visible={visible}
                         actions={actions}
                         onClose={() => setVisible(false)}
                         onAction={(action) => {
                             if (action.key === "upload") {
                                 setVisible(false);
                                 fileInputRef.current.click();
                             } else if (action.key === "camera") {
                                 setVisible(false);
                                 setIsCamera(true);
                             }
                         }}/>

            {/*Camera component*/}
            {isCamera &&
                <div style={{
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: 'white'
                }}>
                    <Camera setUploading={props.setUploading}
                            addMsg={props.addMsg}
                            collect={props.collect}
                            setIsCamera={setIsCamera.bind(this)}
                    />
                </div>}
        </>
    );
};

export default Pictures;
