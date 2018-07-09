import { connect } from 'react-redux'
import { revealModalLogin, revealModalSignup } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions'
import Header from './header'

const mapDispatchToProps = dispatch => {
  return {
    revealModalLogin: () => dispatch(revealModalLogin()),
    revealModalSignup: () => dispatch(revealModalSignup()),
    logout: () => dispatch(logout())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
