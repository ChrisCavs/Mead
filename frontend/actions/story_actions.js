import * as ApiUtil from '../util/story_api_util'

export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES'
export const RECEIVE_STORY = 'RECEIVE_STORY'
export const RECEIVE_TAG_STORIES = 'RECEIVE_TAG_STORIES'
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS'

export const receiveAllStories = payload => {
  return {
    type: RECEIVE_ALL_STORIES,
    payload
  }
}

export const receiveTagStories = payload => {
  return {
    type: RECEIVE_TAG_STORIES,
    payload
  }
}

export const receiveStory = payload => {
  return {
    type: RECEIVE_STORY,
    payload
  }
}

export const receiveStoryErrors = errors => {
  return {
    type: RECEIVE_STORY_ERRORS,
    errors: errors.responseJSON
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

export const fetchTagStories = name => dispatch => {
  return ApiUtil.fetchTagStories(name).then(
    payload => dispatch(receiveTagStories(payload))
  )
}

export const createStory = story => dispatch => {
  return ApiUtil.createStory(story).then(
    payload => dispatch(receiveStory(payload)),
    errors => dispatch(receiveStoryErrors(errors))
  )
}

export const updateStory = story => dispatch => {
  return ApiUtil.updateStory(story).then(
    payload => dispatch(receiveStory(payload)),
    errors => dispatch(receiveStoryErrors(errors))
  )
}

export const destroyStory = id => dispatch => {
  return ApiUtil.destroyStory(id).then(
    payload => dispatch(receiveStory(payload))
  )
}
