import { RECEIVE_ALL_STORIES } from '../actions/story_actions'

export default (state = [], action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.payload.popular

    default:
      return state
  }
}