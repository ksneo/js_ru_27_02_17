import {normalizedComments} from '../fixtures'
import {SUBMIT_COMMENT} from '../constants'



export default (comments = normalizedComments, action) => {
    const { type, payload, id } = action

    switch (type) {
        case SUBMIT_COMMENT:
            // return [...comments, {id: id, user: payload.user, text: payload.text}]
            return comments.concat([{id: id, user: payload.comment.user, text: payload.comment.text}])
        default:
            return comments
    }
}