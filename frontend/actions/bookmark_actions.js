import * as ApiUtil from '../util/bookmark_api_util'

export const RECEIVE_BOOKMARK_STORIES = 'RECEIVE_BOOKMARK_STORIES'
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK'

export const receiveBookmarkStories = payload => {
  return {
    type: RECEIVE_BOOKMARK_STORIES,
    payload
  }
}

export const receiveBookmark = payload => {
  return {
    type: RECEIVE_BOOKMARK,
    payload
  }
}

export const makeBookmark = id => dispatch => {
  return ApiUtil.makeBookmark(id).then(
    payload => dispatch(receiveBookmark(payload))
  )
}

export const removeBookmark = id => dispatch => {
  return ApiUtil.removeBookmark(id).then(
    payload => dispatch(receiveBookmark(payload))
  )
}

export const fetchUserBookmarks = id => dispatch => {
  return ApiUtil.fetchUserBookmarks(id).then(
    payload => dispatch(receiveBookmarkStories(payload))
  )
}