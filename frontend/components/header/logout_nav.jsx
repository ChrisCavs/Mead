import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import NewButton from './new_button'

class LogoutNav extends React.Component {
  constructor (props) {
    super(props)
  }

  handleLogout (e) {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    const userURL = `/users/${this.props.currentUser.id}`

    return (
      <nav className="header-nav">

        <NewButton addedClass="right" />

        <button
          className="header-button logout"
          onClick={this.handleLogout.bind(this)}>
          Sign Out
        </button>

        <Link to={userURL}>
          <img
            className="header-image"
            src={this.props.currentUser.avatar} />
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
