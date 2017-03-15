import {INCREMENT, DELETE_ARTICLE, SELECT_TITLE_ARTICLE, FILTER_DATE_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterTitleArticle(articles){
    return {
        type: SELECT_TITLE_ARTICLE,
        payload: { articles }
    }
}

export function filterDate(payload){
    return {
        type: FILTER_DATE_ARTICLE,
        payload: payload
    }
}