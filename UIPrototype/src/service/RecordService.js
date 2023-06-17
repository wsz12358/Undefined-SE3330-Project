import {postRequest} from "../utils/Ajax";
export const getSentence = (data, callback, errback) => {
    const url = "http://localhost:8080/sentence/getone";
    postRequest(url, data, callback, errback);
}