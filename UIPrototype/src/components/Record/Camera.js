import React, {useRef} from "react";

export default function Camera() {
    const c_video = useRef(null);
    const c_canvas = useRef(null);
    const successFunc = (stream) => {
        if ('srcObject' in c_video) {
            c_video.srcObject = stream;
        }
        c_video.onloadedmetadata = () => {
            c_video.play();
        };
    }
    const opt = {
        audio: false,
        video: {
            width: 500,
            height: 200
        }
    };

    navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch((e) => console.log(e));

    return (
        <div>
            <video id="camera_video"
                   ref={c_video}
                   style={{
                       position: 'absolute', top: '30px', height: '500px', width: '200px'
                   }}/>
            <canvas id="camera_canvas"
                    ref={c_canvas}
                    style={{
                        width: '200px', height: '500px'
                    }}/>
        </div>
    )
}