import request from "superagent";
import {useState} from "react";

const CLOUDINARY_UPLOAD_PRESET = "m2gc5zz5";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dqqesuzb8/upload";

const HandleImageUpload = (file, collect, addMsg) => {
    let upload = request
        .post(CLOUDINARY_UPLOAD_URL)
        .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        .field("file", file);

    upload.end((err, response) => {
        if (err) {
            console.error(err);
        }

        if (response.body.secure_url !== "") {
            addMsg(response.body.secure_url, "img", collect);
            console.log("Image URL:", response.body.secure_url); // Log the image URL
        }
    });
};

export default HandleImageUpload;
