import {
    SELECT_TITLE_ARTICLE,
    DELETE_ARTICLE,
    FILTER_DATE_ARTICLE
} from '../constants'

const initState = {
    filterArticles: [],
    filterDate: {
        from: null,
        to: null
    }
}

export default (state = initState, action) => {
    const {
        type,
        payload
    } = action

    switch (type) {
        case SELECT_TITLE_ARTICLE:
            return { ...state,
                //а здесь лучше просто id хранить, а не все что в Select приходит
                filterArticles: payload.articles
            }
            //лишний return
            return {
                ...state,
                filterArticles: payload.articles
            }
        case DELETE_ARTICLE:
            return {
                ...state,
                filterArticles: state.filterArticles.filter(article => article.value !== payload.id)
            }
        case FILTER_DATE_ARTICLE:
            return {
                ...state,
                filterDate: payload
            }
    }

    return state
}
