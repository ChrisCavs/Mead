import { RECEIVE_STORY_ERRORS } from '../actions/story_actions'

export default (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors
  
    default:
      return []
  }
}