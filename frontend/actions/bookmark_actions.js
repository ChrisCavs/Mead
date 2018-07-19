import * as ApiUtil from '../util/bookmark_api_util'
import { receiveStory, RECEIVE_STORY } from './story_actions'

export const makeBookmark = id => dispatch => {
  return ApiUtil.makeBookmark(id).then(
    payload => receiveStory(payload)
  )
}

export const removeBookmark = id => dispatch => {
  return ApiUtil.removeBookmark(id).then(
    payload => receiveStory(payload)
  )
}