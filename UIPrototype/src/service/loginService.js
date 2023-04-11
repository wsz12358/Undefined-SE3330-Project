import {postRequest} from "../utils/Ajax";

export const login = (data, callback, errback) => {
    const url = "http://localhost:8080/login";
    postRequest(url, data, callback, errback);
}

export const saveMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/SetMessage";
    postRequest(url, data, callback, errback);
}