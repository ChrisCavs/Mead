import * as ApiUtil from '../util/bookmark_api_util'
import { receiveStory, RECEIVE_STORY } from './story_actions'

export const RECEIVE_BOOKMARK_STORIES = 'RECEIVE_BOOKMARK_STORIES'

export const receiveBookmarkStories = payload => {
  return {
    type: RECEIVE_BOOKMARK_STORIES,
    payload
  }
}

export const makeBookmark = id => dispatch => {
  return ApiUtil.makeBookmark(id).then(
    payload => dispatch(receiveStory(payload))
  )
}

export const removeBookmark = id => dispatch => {
  return ApiUtil.removeBookmark(id).then(
    payload => dispatch(receiveStory(payload))
  )
}

export const fetchUserBookmarks = id => dispatch => {
  return ApiUtil.fetchUserBookmarks(id).then(
    payload => dispatch(receiveBookmarkStories(payload))
  )
}