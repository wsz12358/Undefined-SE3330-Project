export const postRequest = (url, json, callback) => {
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
            console.log(e);
        })
}