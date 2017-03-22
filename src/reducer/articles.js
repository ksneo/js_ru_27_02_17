import {
    normalizedArticles
} from '../fixtures'
import {
    DELETE_ARTICLE,
    SUBMIT_COMMENT
} from '../constants'

export default (state = normalizedArticles, action) => {
    const {
        type,
        payload,
        id
    } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
        case SUBMIT_COMMENT:

            return state.filter((article) => article.id !== payload.articleId).concat(
                state
                .filter((article) => article.id === payload.articleId)
                .map((article) => ({
                    ...article,
                    comments: article.comments.concat(id)
                }))
            )

    }

    return state
}