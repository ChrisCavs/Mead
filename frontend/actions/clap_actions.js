import * as ApiUtil from '../util/clap_api_util'

export const RECEIVE_CLAPS = 'RECEIVE_CLAPS'

export const receiveClaps = payload => {
  return {
    type: RECEIVE_CLAPS,
    payload
  }
}

export const createClap = clap => dispatch => {
  return ApiUtil.createClap(clap).then(
    payload => dispatch(receiveClaps(payload))
  )
}