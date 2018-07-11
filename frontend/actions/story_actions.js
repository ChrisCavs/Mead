import * as ApiUtil from '../util/story_api_util'

export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES'
export const RECEIVE_STORY = 'RECEIVE_STORY'

export const receiveAllStories = payload => {
  debugger
  return {
    type: RECEIVE_ALL_STORIES,
    payload
  }
}

export const receiveStory = payload => {
  return {
    type: RECEIVE_STORY,
    payload
  }
}

export const fetchAllStories = () => dispatch => {
  return ApiUtil.fetchAllStories().then(
    payload => dispatch(receiveAllStories(payload))
  )
}

export const fetchStory = id => dispatch => {
  return ApiUtil.fetchStory(id).then(
    payload => dispatch(receiveStory(payload))
  )
}

export const createStory = story => dispatch => {
  return ApiUtil.createStory(story).then(
    payload => dispatch(receiveStory(payload))
  )
}

export const updateStory = story => dispatch => {
  return ApiUtil.updateStory(story).then(
    payload => dispatch(receiveStory(payload))
  )
}

export const destroyStory = id => dispatch => {
  return ApiUtil.destroyStory(id).then(
    payload => dispatch(receiveStory(payload))
  )
}
