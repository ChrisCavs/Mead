import * as ApiUtil from '../util/follow_api_util'
import { receiveUser } from './user_actions'

export const followUser = id => dispatch => {
  return ApiUtil.followUser(id).then(
    user => dispatch(receiveUser(user))
  )
}

export const unFollowUser = id => dispatch => {
  return ApiUtil.unFollowUser(id).then(
    user => dispatch(receiveUser(user))
  )
}