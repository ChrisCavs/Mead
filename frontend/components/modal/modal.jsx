import React from 'react'
import ModalLoginForm from './modal_login_form'
import ModalSignupForm from './modal_signup_form'
import { withRouter } from 'react-router-dom'

class Modal extends React.Component {

  handleHide = event => {
    this.props.history.push('/')
    this.props.hide()
  }

  render () {
    const classes = this.props.reveal ? 'modal' : 'modal hide'
    let modal = <div></div>

    if (this.props.reveal === 'login') {
      modal = <ModalLoginForm
        title="Log In"
        errors={this.props.errors}
        submitAction={this.props.login}
        hide={this.props.hide}
        revealModalSignup={this.props.revealModalSignup} />

    } else if (this.props.reveal) {
      modal = <ModalSignupForm
        title="Sign Up"
        errors={this.props.errors}
        submitAction={this.props.signup}
        hide={this.props.hide}
        revealModalLogin={this.props.revealModalLogin} />
    }

    return (
      <div className={classes}>
        <div className="modal-content">
          <button
            onClick={this.handleHide}
            className="modal-close-button">
            x
        </button>

          {modal}
        </div>
      </div>
    )
  }
}
export default withRouter(Modal)
