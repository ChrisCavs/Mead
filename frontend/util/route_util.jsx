import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Auth = ({{component: Component, path, loggedIn, exact}}) => {
  return (
    <Route path={path} exact={exact} render={props => {
      if (!loggedIn) {
        <Component {...props} />
      } else {
        <Redirect to="/" />
      }
    }} />
  )
}

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)}
}

export const AuthRoute = connect(
  mapStateToProps
)(Auth)
