import {postRequest} from "../utils/Ajax";

export const login = (data, callback, errback) => {
    const url = "http://localhost:8080/log/login";
    postRequest(url, data, callback, errback);
}

export const saveMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/message/add";
    postRequest(url, data, callback, errback);
}

export const getEvents = (data, callback, errback) => {
    const url = "http://localhost:8080/event/get";
    postRequest(url, data, callback, errback);
}

export const getMsgs = (data, callback, errback) => {
    const url = "http://localhost:8080/event/getbyid";
    postRequest(url, data, callback, errback);
}

export const saveCurMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/curevent/save";
    postRequest(url, data, callback, errback);
}

export const pauseEvent = (data, callback, errback) => {
    const url = "http://localhost:8080/event/pause";
    postRequest(url, data, callback, errback);
}

export const addEvent = (data, callback, errback) => {
    const url = "http://localhost:8080/event/add";
    postRequest(url, data, callback, errback);
}