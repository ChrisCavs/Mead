import { RECEIVE_ALL_STORIES, RECEIVE_STORY } from '../actions/story_actions'
import { RECEIVE_COMMENT } from '../actions/comment_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.payload.stories || {}

    case RECEIVE_STORY:
      newState[action.payload.story.id] = action.payload.story
      return newState
    
    case RECEIVE_COMMENT:
      const newComments = action.payload.story.comments_array
      newState[action.payload.story.id].comments_array = newComments
      return newState

    default:
      return state
  }
}
