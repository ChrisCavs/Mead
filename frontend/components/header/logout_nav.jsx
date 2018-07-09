import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { Link } from 'react-router-dom'

class LogoutNav extends React.Component {
  constructor (props) {
    super(props)
  }

  handleLogout (e) {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    return (
      <nav className="header-nav">
        <button
          className="header-button"
          onClick={this.handleLogout.bind(this)}>
          Log Out
        </button>

        <Link
          className="header-button"
          to='/story/new'>
          New
        </Link>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(
  null, mapDispatchToProps
)(LogoutNav)
