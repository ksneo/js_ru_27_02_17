import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import generateID from '../middlewares/generateID'

const enhancer = applyMiddleware(logger, generateID)

const store = createStore(reducer, {}, enhancer)

// const store = createStore(
//     reducer,
//     applyMiddleware(
//         logger
//     )
// );

//dev only
window.store = store

export default store