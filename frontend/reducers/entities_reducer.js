import { combineReducers } from 'redux'
import users from './users_reducer'
import stories from './stories_reducer'
import comments from './comments_reducer'
import popular from './popular_reducer'
import tags from './tags_reducer'

export default combineReducers({
  users,
  stories,
  comments,
  popular,
  tags
})
