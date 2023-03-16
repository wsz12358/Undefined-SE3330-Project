import {
    SET_FILTER_OPEN, SET_CATEGORY, SET_TAG_STATUS,
    SET_TIME_STATUS, SET_TIME_FROM, SET_TIME_TO,
    SET_TAG_TEXT, SET_FROMCAL_VIS, SET_TOCAL_VIS,
} from "./Constants";

const initialState = {
    category: "event",
    filterOpen: true,
    filterTagStatus: [],
    filterTimeStatus: false,
    filterTimeFrom: null,
    filterTimeTo: null,
    filterTagText: '',
    fromCalVis: false,
    toCalVis: false,
}

export default function filterReducer(prevState = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case SET_FILTER_OPEN:
            return {
                ...prevState,
                filterOpen: data,
            }
        case SET_CATEGORY:
            return {
                ...prevState,
                category: data,
            }
        case SET_TIME_STATUS:
            return {
                ...prevState,
                filterTimeStatus: data,
            }
        case SET_TAG_STATUS:
            return {
                ...prevState,
                filterTagStatus: data,
            }
        case SET_TIME_FROM:
            return {
                ...prevState,
                filterTimeFrom: data,
            }
        case SET_TIME_TO:
            return {
                ...prevState,
                filterTimeTo: data,
            }
        case SET_TAG_TEXT:
            return {
                ...prevState,
                filterTagText: data,
            }
        case SET_FROMCAL_VIS:
            return {
                ...prevState,
                fromCalVis: data,
            }
        case SET_TOCAL_VIS:
            return {
                ...prevState,
                toCalVis: data,
            }
        default:
            return prevState;
    }
}