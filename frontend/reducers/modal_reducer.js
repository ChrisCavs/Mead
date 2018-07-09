import { REVEAL_MODAL_LOGIN,
  REVEAL_MODAL_SIGNUP,
  HIDE_MODAL } from '../actions/modal_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const defaultState = {
  reveal: null
}

export default (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case REVEAL_MODAL_LOGIN:
      return { reveal: 'login' }

    case REVEAL_MODAL_SIGNUP:
      return { reveal: 'signup' }

    case HIDE_MODAL:
    case RECEIVE_CURRENT_USER:
      return defaultState

    default:
      return state
  }
}
