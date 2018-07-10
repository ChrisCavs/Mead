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
        <Link
          className="header-button new-button"
          to='/story/new'>
          New
        </Link>

        <button
          className="header-button logout"
          onClick={this.handleLogout.bind(this)}>
          Sign Out
        </button>

        <img 
          className="header-image"
          src={this.props.currentUser.avatar} />
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
