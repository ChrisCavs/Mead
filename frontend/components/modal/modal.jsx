import React from 'react'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session_actions'
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
          <ModalForm title={revealText} submitAction={action} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reveal: state.modal.reveal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)