import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'
import NewButton from './new_button'

const Header = () => {

  return (
    <header className="header">
      <NewButton addedClass="left" />

      <Link className="header-title" to="/">
        Mead
      </Link>

      <Nav />
    </header>
  )
}

export default Header