import {GENERATE_ID} from '../constants'

export default (newID = 0, action) => {
    const { type } = action

    switch (type) {
        case GENERATE_ID:
            return newID
    }

    return newID
}