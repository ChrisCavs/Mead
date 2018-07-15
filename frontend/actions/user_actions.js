import * as ApiUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  }
}

export const receiveAllUsers = payload => {
  return {
    type: RECEIVE_ALL_USERS,
    payload
  }
}

export const fetchUser = id => dispatch => {
  return ApiUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user))
  )
}

export const fetchAllUsers = () => dispatch => {
  return ApiUtil.fetchAllUsers().then(
    payload => dispatch(receiveAllUsers(payload))
  )
}