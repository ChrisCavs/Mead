import React from 'react'
import ModalForm from './modal_form'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    if (!this.props.reveal) {
      return <div></div>
    }
    const revealText = this.props.reveal === 'login' ? 'Log In' : 'Sign Up'
    const action = revealText === 'Log In' ? this.props.login : this.props.signup
    return (
      <div className="modal">
        <div className="modal-content">
          <button 
            onClick={this.props.hide}
            className="modal-close-button">
            x
          </button>

          <ModalForm 
            title={revealText}
            errors={this.props.errors} 
            submitAction={action}
            hide={this.props.hide} />
        </div>
      </div>
    )
  }
}

export default Modal