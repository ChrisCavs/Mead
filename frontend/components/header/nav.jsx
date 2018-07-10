import React from 'react'
import { connect } from 'react-redux'
import LogoutNav from './logout_nav'
import LoginNav from './login_nav'

const Nav = ({ currentUser }) => {
  return currentUser ? <LogoutNav currentUser={currentUser} /> : <LoginNav />
}

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser
  }
}

export default connect(
  mapStateToProps
)(Nav)
