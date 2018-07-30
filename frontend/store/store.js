import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

export default (defaultState) => {
  return createStore(
    rootReducer, defaultState, applyMiddleware(...middlewares)
  )
}
