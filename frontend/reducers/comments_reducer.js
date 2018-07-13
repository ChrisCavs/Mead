import { RECEIVE_COMMENT } from '../actions/comment_actions'
import { RECEIVE_STORY } from '../actions/story_actions'
import { RECEIVE_CLAPS } from '../actions/clap_actions'
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.payload.comment.id] = action.payload.comment
      return newState

    case RECEIVE_STORY:
      return merge({}, newState, action.payload.comments)

    case RECEIVE_CLAPS:
      const commentPayload = action.payload.comment
      if (commentPayload.id) {
        newState[commentPayload.id].totalClaps = commentPayload.totalClaps
        return newState
      } else {
        return state
      }
  
    default:
      return state
  }
}