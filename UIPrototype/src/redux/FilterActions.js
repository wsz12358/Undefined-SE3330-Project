import {
    SET_FILTER_OPEN, SET_CATEGORY, SET_TAG_STATUS,
    SET_TIME_STATUS, SET_TIME_FROM, SET_TIME_TO,
    SET_TAG_TEXT, SET_TOCAL_VIS, SET_FROMCAL_VIS,
    SET_USERID, SET_USERNAME, SET_IS_LOGIN,
    SET_CUR_DURATION
} from "./Constants";

export const setFilterOpen = e => {
    return {
        type: SET_FILTER_OPEN,
        data: e,
    }
}

export const setCategory = e => {
    return {
        type: SET_CATEGORY,
        data: e,
    }
}

export const setTagStatus = e => {
    return {
        type: SET_TAG_STATUS,
        data: e,
    }
}

export const setTimeStatus = e => {
    return {
        type: SET_TIME_STATUS,
        data: e,
    }
}

export const setTimeFrom = e => {
    return {
        type: SET_TIME_FROM,
        data: e,
    }
}

export const setTimeTo = e => {
    return {
        type: SET_TIME_TO,
        data: e,
    }
}

export const setTagText = e => {
    return {
        type: SET_TAG_TEXT,
        data: e,
    }
}

export const setFromCalVis = e => {
    return {
        type: SET_FROMCAL_VIS,
        data: e,
    }
}

export const setToCalVis = e => {
    return {
        type: SET_TOCAL_VIS,
        data: e,
    }
}

export const setUserId = e => {
    return {
        type: SET_USERID,
        data: e,
    }
}

export const setUsername = e => {
    return {
        type: SET_USERNAME,
        data: e,
    }
}

export const setIsLogin = e => {
    return {
        type: SET_IS_LOGIN,
        data: e,
    }
}

export const setCurDuration = e => {
    return {
        type: SET_CUR_DURATION,
        data: e,
    }
}