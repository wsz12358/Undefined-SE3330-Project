import {
    SET_FILTER_OPEN, SET_CATEGORY, SET_TAG_STATUS,
    SET_TIME_STATUS, SET_TIME_FROM, SET_TIME_TO,
    SET_TAG_TEXT, SET_FROMCAL_VIS, SET_TOCAL_VIS,
    SET_USERID, SET_USERNAME, SET_IS_LOGIN,
    SET_CUR_DURATION
} from "./Constants";

const initialState = {
    filter: {
        category: "event",
        filterOpen: true,
        filterTagStatus: [],
        filterTimeStatus: false,
        filterTimeFrom: null,
        filterTimeTo: null,
        filterTagText: '',
        fromCalVis: false,
        toCalVis: false,
    },
    user: {
        username: null,
        userid: null,
        isLogin: false,
        avatar: "",
        r_avatar: "",
    },
    event: {
        cur_duration: 0,  // not used.
        // not sure whether to add more here.
    }
}

export default function filterReducer(prevState = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case SET_FILTER_OPEN:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterOpen: data
                },
            }
        case SET_CATEGORY:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    category: data
                },
            }
        case SET_TIME_STATUS:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterTimeStatus: data
                },
            }
        case SET_TAG_STATUS:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterTagStatus: data
                },
            }
        case SET_TIME_FROM:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterTimeFrom: data
                },
            }
        case SET_TIME_TO:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterTimeTo: data
                },
            }
        case SET_TAG_TEXT:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    filterTagText: data
                },
            }
        case SET_FROMCAL_VIS:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    fromCalVis: data
                },
            }
        case SET_TOCAL_VIS:
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    toCalVis: data
                },
            }
        case SET_USERID:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    userid: data,
                },
            }
        case SET_USERNAME:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    username: data,
                },
            }
        case SET_IS_LOGIN:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    isLogin: data,
                },
            }
        case SET_CUR_DURATION:
            return {
                ...prevState,
                event: {
                    ...prevState.event,
                    cur_duration: data,
                }
            }
        default:
            return prevState;
    }
}