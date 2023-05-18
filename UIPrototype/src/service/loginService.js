import {postRequest} from "../utils/Ajax";

export const login = (data, callback, errback) => {
    const url = "http://localhost:8080/log/login";
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

export const addMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/message/add"
    postRequest(url, data, callback, errback);
}

export const updateMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/message/update"
    postRequest(url, data, callback, errback);
}

export const delMsg = (data, callback, errback) => {
    const url = "http://localhost:8080/message/delete"
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

export const continueEvent = (data, callback, errback) => {
    const url = "http://localhost:8080/event/continue";
    postRequest(url, data, callback, errback);
}

export const getCurEvent = (data, callback, errback) => {
    const url = "http://localhost:8080/curevent/get";
    postRequest(url, data, callback, errback);
}