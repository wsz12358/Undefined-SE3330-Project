import React, {useRef} from "react";
import {Button} from "antd-mobile";
import HandleImageUpload from "../../utils/HandleImageUpload";

export default function Camera(props) {
    const c_video = useRef(null);
    const c_canvas = useRef(null);

    const closeMedia = () => {
        const video = c_video.current;
        const stream = video.srcObject;
        if ('getTracks' in stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => {
                track.stop();
            });
        }
    };

    const successFunc = (stream) => {
        const video = c_video.current;
        if ('srcObject' in video) {
            video.srcObject = stream;
        }
        video.onloadedmetadata = () => {
            video.play();
        };
    }

    const getImg = () => { // 获取图片资源
        const video = c_video.current;
        const canvas = c_canvas.current;
        if (canvas == null) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        closeMedia(); // 获取到图片之后可以自动关闭摄像头

        props.setIsCamera(false);
        props.setUploading(true);  // start uploading, must not be interrupted
        props.addMsg("", "pend");  // add a fake message for loading
        HandleImageUpload(canvas.toDataURL(), props.collect, props.addMsg);
    };


    const opt = {
        audio: false,
        video: {
            width: "100%",
        }
    };

    navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch((e) => console.log(e));

    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <video id="camera_video"
                   ref={c_video}
                   style={{width: '100%'}}/>
            <canvas id="camera_canvas"
                    ref={c_canvas}
                    style={{backgroundColor: 'red', display: 'none'}}/>
            <Button onClick={getImg}>OK</Button>
        </div>
    )
}