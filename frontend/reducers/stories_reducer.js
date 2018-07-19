import { RECEIVE_ALL_STORIES, RECEIVE_STORY, RECEIVE_TAG_STORIES } from '../actions/story_actions'
import { RECEIVE_COMMENT } from '../actions/comment_actions'
import { RECEIVE_CLAPS } from '../actions/clap_actions'
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL } from '../actions/search_actions'
import { RECEIVE_BOOKMARK_STORIES, RECEIVE_BOOKMARK } from '../actions/bookmark_actions'
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.payload.stories || {}

    case RECEIVE_ALL:
    case RECEIVE_TAG_STORIES:
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_BOOKMARK_STORIES:
      return merge(newState, action.payload.stories)

    case RECEIVE_STORY:
    case RECEIVE_BOOKMARK:
      return merge({}, newState, {[action.payload.story.id]: action.payload.story})

    case RECEIVE_COMMENT:
      const newComments = action.payload.story.comments_array
      newState[action.payload.story.id].comments_array = newComments
      return newState

    case RECEIVE_CLAPS:
      const storyPayload = action.payload.story
      if (storyPayload.id) {
        newState[storyPayload.id].totalClaps = storyPayload.totalClaps
        return newState
      } else {
        return state
      }

    default:
      return state
  }
}
