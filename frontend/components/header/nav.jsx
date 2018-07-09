import React from 'react'
import { connect } from 'react-redux'
import LogoutNav from './logout_nav'
import LoginNav from './login_nav'

const Nav = ({ currentUser }) => {
  return currentUser ? <LogoutNav /> : <LoginNav />
}

const mapStateToProps = state => {
  const currentUser = typeof state.session.id === 'number'
  return {
    currentUser
  }
}

export default connect(
  mapStateToProps
)(Nav)
