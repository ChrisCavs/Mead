import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions'
import { RECEIVE_STORY, RECEIVE_ALL_STORIES, RECEIVE_TAG_STORIES } from '../actions/story_actions'
import { RECEIVE_ALL } from '../actions/search_actions'
import { merge } from 'lodash'
import { RECEIVE_BOOKMARK_STORIES, RECEIVE_BOOKMARK } from '../actions/bookmark_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      newState[action.payload.user.id] = action.payload.user
      return newState

    case RECEIVE_ALL_USERS:
      return action.payload.users

    case RECEIVE_ALL_STORIES:
    case RECEIVE_ALL:
    case RECEIVE_TAG_STORIES:
    case RECEIVE_BOOKMARK_STORIES:
      return merge(newState, action.payload.users)

    case RECEIVE_STORY:
      return merge({}, newState, {[action.payload.user.id]: action.payload.user})

    case RECEIVE_BOOKMARK:
      newState[action.payload.user.id].bookmarkIds = action.payload.user.bookmarkIds
      return newState

    default:
      return state
  }
}
