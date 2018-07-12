import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'
import NewButton from './new_button'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <header className="header">
        <NewButton addedClass="left" />

        <Link className="header-title" to="/">
          Mead
        </Link>

        {/* search */}

        <Nav />
      </header>
    )
  }
}

export default Header