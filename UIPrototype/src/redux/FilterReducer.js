import {
    SET_FILTER_OPEN, SET_CATEGORY, SET_TAG_STATUS,
    SET_TIME_STATUS, SET_TIME_FROM, SET_TIME_TO,
    SET_TAG_TEXT, SET_FROMCAL_VIS, SET_TOCAL_VIS, SET_PASSWORD, SET_USERNAME, SET_IS_LOGIN, SET_AVATAR,
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
        password: null,
        isLogin: false,
        avatar: "",
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
        case SET_PASSWORD:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    password: data,
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
        case SET_AVATAR:
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    avatar: data,
                },
            }
        default:
            return prevState;
    }
}