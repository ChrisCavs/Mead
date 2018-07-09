import { combineReducers } from 'redux'
import users from './users_reducer'
import stories from './stories_reducer'

export default combineReducers({
  users,
  stories
})
