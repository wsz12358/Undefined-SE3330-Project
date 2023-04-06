import {Dialog} from "antd-mobile";

export const postRequest = (url, json, callback, errback) => {
    const opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };

    fetch(url, opts)
        .then((e) => {
            return e.json();
        })
        .then((e) => {
            callback(e);
        })
        .catch((e) => {
            Dialog.alert({
                content: "Error Internet connection.",
            });
            errback();
        })
}