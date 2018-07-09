import React from 'react'
import ModalLoginForm from './modal_login_form'
import ModalSignupForm from './modal_signup_form'

const Modal = ({reveal, errors, login, signup, hide}) => {
  if (reveal === 'login') {
    return (
      <div className="modal">
        <div className="modal-content">
          <button
            onClick={hide}
            className="modal-close-button">
            x
          </button>

          <ModalLoginForm
            title="Log In"
            errors={errors}
            submitAction={login}
            hide={hide} />
        </div>
      </div>
    )
  } else if (reveal) {
    return (
      <div className="modal">
        <div className="modal-content">
          <button
            onClick={hide}
            className="modal-close-button">
            x
          </button>

          <ModalSignupForm
            title="Sign Up"
            errors={errors}
            submitAction={signup}
            hide={hide} />
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}
export default Modal
