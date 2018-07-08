export const REVEAL_MODAL_LOGIN = 'REVEAL_MODAL_LOGIN'
export const REVEAL_MODAL_SIGNUP = 'REVEAL_MODAL_LOGOUT'
export const HIDE_MODAL = 'HIDE_MODAL'

export const revealModalLogin = () => {
  return {
    type: REVEAL_MODAL_LOGIN
  }
}

export const revealModalSignup = () => {
  return {
    type: REVEAL_MODAL_SIGNUP
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}