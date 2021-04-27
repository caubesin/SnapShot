import {SEARCH, SEARCH_SUCCESS,SEARCH_FAIL} from '../const/index';

const initialState = {
    image : [],
    isLoading : false,
    error: null,
    tags : null,
    page : 1,
    isNew: false,
    noResult: false
}



function Search (state = initialState, action){
    switch(action.type) {
        case SEARCH:
           return state = {
               ...state,
               isNew : action.isNew,
               isLoading: true
           }
        case SEARCH_SUCCESS: {
            if(action.img.length === 0) {
                state.page = action.isNew ? 1 : action.page;
                return state = {
                    ...state,
                    isLoading: false,
                    noResult: true,
                    error: false
                }
            }
            if(action.isNew === true) {
                state.image = state.image.filter(() => false);
                state.image.push(action.img);
                return state = {
                    ...state,
                    isLoading: false,
                    tags: action.queryString,
                    page : action.page,
                    isNew : action.isNew,
                    noResult: false,
                    error: false
                }
            }
            state.image.push(action.img)
            return state = {
                ...state,
                isLoading: false,
                tags: action.queryString,
                page : action.page,
                isNew : false,
                error: false
            }
        }
        case SEARCH_FAIL:
            return state = {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state = {
                ...state
            };
    }
}

export default Search;