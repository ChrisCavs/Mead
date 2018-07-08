import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'

export default (defaultState) => {
  return createStore(
    rootReducer, defaultState, applyMiddleware(thunk, logger)
  )
}
