import React from 'react'
import ModalLoginForm from './modal_login_form'
import ModalSignupForm from './modal_signup_form'

const Modal = ({
  reveal, errors, login, signup, hide, revealModalSignup, revealModalLogin}) => {

  const classes = reveal ? 'modal' : 'modal hide'
  let modal = <div></div>

  if (reveal === 'login') {
    modal = <ModalLoginForm
              title="Log In"
              errors={errors}
              submitAction={login}
              hide={hide}
              revealModalSignup={revealModalSignup} />

  } else if (reveal) {
    modal = <ModalSignupForm
              title="Sign Up"
              errors={errors}
              submitAction={signup}
              hide={hide}
              revealModalLogin={revealModalLogin} />
  }

  return (
    <div className={classes}>
      <div className="modal-content">
        <button
          onClick={hide}
          className="modal-close-button">
          x
        </button>

        {modal}
      </div>
    </div>
  )
}
export default Modal
