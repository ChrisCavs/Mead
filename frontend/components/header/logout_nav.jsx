import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { Link } from 'react-router-dom'
import NewButton from './new_button'
import Search from '../search/search'

class LogoutNav extends React.Component {

  handleLogout = event => {
    event.preventDefault()
    this.props.logout()
  }

  render () {
    const userURL = `/users/${this.props.currentUser.id}`

    return (
      <nav className="header-nav">
        <Link to="/search">
          <img 
            src={window.search}
            className="search-icon" />
        </Link>

        <NewButton addedClass="right" />

        <Link to='/bookmarks'>
          <img 
            src={window.bookmarkOpen}
            className="header-bookmark-icon" />
        </Link>

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
  null, 
  mapDispatchToProps
)(LogoutNav)
