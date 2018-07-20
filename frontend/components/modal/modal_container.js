import Modal from './modal'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session_actions'
import { hideModal, revealModalSignup, revealModalLogin } from '../../actions/modal_actions'

const mapStateToProps = state => {
  return {
    reveal: state.modal.reveal,
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    hide: () => dispatch(hideModal()),
    revealModalSignup: () => dispatch(revealModalSignup()),
    revealModalLogin: () => dispatch(revealModalLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)