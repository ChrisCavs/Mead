import { RECEIVE_ALL_STORIES } from '../actions/story_actions'
import { RECEIVE_ALL } from '../actions/search_actions';

export default (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
    case RECEIVE_ALL:
      return action.payload.tags
  
    default:
      return state
  }
}