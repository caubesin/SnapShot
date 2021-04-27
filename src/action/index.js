import {SEARCH, SEARCH_SUCCESS, SEARCH_FAIL} from "../const/index";

import getData from "../server/index";


export default (queryString, page, isNew) => {
    return dispatch => {
        dispatch(actSEARCH(isNew));
        getData(queryString, page, isNew)
            .then((img) => dispatch(actSEARCH_SUCCESS(img,queryString, page, isNew)))
            .catch(err => dispatch(actSEARCH_FAIL(err)))
    }
}

const actSEARCH = (isNew) => {
    return({
        type: SEARCH,
        isNew: isNew
    })
}

const actSEARCH_SUCCESS = (img,queryString, page, isNew) => {
    return({
        type: SEARCH_SUCCESS,
        img,
        queryString,
        page,
        isNew
    })
}

const actSEARCH_FAIL = (err) => {
    return({
        type: SEARCH_FAIL,
        err
    })
}