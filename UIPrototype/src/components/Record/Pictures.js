import React, { useRef, useState } from "react";
import { ActionSheet } from "antd-mobile";
import { PicturesOutline } from "antd-mobile-icons";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "m2gc5zz5";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dqqesuzb8/upload";

const Pictures = (props) => {
    const [uploadedFileCloudinaryUrl, setUploadedFileCloudinaryUrl] = useState("");
    const [visible, setVisible] = useState(false);
    const fileInputRef = useRef();

    const actions = [
        { text: "从相册中上传", key: "upload" },
        { text: "摄像头拍摄", key: "camera" },
    ];

    const onImageDrop = (files) => {
        handleImageUpload(files[0]);
    };

    const handleImageUpload = (file) => {
        let upload = request
            .post(CLOUDINARY_UPLOAD_URL)
            .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
            .field("file", file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== "") {
                setUploadedFileCloudinaryUrl(response.body.secure_url);
                props.addMsg(response.body.secure_url, true, "img");
                console.log("Image URL:", response.body.secure_url); // Log the image URL
            }
        });
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleImageUpload(file);
    };

    return (
        <>
            <div
                className="record_gadgets bordered"
                style={{ paddingTop: 15 }}
                onClick={() => setVisible(true)}
            >
                <PicturesOutline fontSize={40} />
                <span>图片</span>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileInputChange}
            />
            <ActionSheet
                visible={visible}
                actions={actions}
                onClose={() => setVisible(false)}
                onAction={(action) => {
                    if (action.key === "upload") {
                        setVisible(false);
                        fileInputRef.current.click();
                    }
                }}
            />
        </>
    );
};

export default Pictures;
