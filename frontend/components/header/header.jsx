import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.revealModalLogin()
  }

  handleSignup(e) {
    e.preventDefault()
    this.props.revealModalSignup()
  }

  render () {
    return (
      <header>
        <Link className="header-title" to="/">
          Mead
        </Link>

        {/* search */}

        <nav className="header-nav">
          <button 
            className="header-login"
            onClick={this.handleLogin.bind(this)}>
            Log In
          </button>
          <button 
            className="header-signup"
            onClick={this.handleSignup.bind(this)}>
            Get Started
          </button>
        </nav>
      </header>
    )
  }
}

export default Header