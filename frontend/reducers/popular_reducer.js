import { RECEIVE_ALL_STORIES } from '../acitons/story_actions'

export const (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.popular
      
    default:
      return state
  }
}