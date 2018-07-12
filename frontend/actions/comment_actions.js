import * as ApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export const receiveComment = payload => {
  return {
    type: RECEIVE_COMMENT,
    payload
  }
}

export const createComment = comment => dispatch => {
  return ApiUtil.createComment(comment).then(
    payload => dispatch(receiveComment(payload))
  )
}