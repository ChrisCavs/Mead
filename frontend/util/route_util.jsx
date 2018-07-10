import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { revealModalLogin } from '../actions/modal_actions'

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={props => {
      if (!loggedIn) {
        return <Component {...props} />
      } else {
        <Redirect to="/" />
      }
    }} />
  )
}

const Protected = ({ component: Component, path, loggedIn, exact, revealModalLogin }) => {
  return (
    <Route path={path} exact={exact} render={props => {
      if (loggedIn) {
        return <Component {...props} />
      } else {
        revealModalLogin()
        return null
      }
    }} />
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    revealModalLogin: () => dispatch(revealModalLogin())
  }
}

export const AuthRoute = connect(
  mapStateToProps
)(Auth)

export const ProtectedRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(Protected)