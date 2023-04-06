import {postRequest} from "../utils/Ajax";

export const login = (data, callback) => {
    const url = "http://localhost:8080/login";
    postRequest(url, data, callback);
}