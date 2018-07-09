import Modal from './modal'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session_actions'
import { hideModal } from '../../actions/modal_actions'

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
    hide: () => dispatch(hideModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)