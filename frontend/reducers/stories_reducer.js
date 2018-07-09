import { RECEIVE_ALL_STORIES, RECEIVE_STORY } from '../actions/story_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.payload.stories

    case RECEIVE_STORY:
      newState[action.payload.story.id] = action.payload.story
      return newState

    default:
      return state
  }
}
