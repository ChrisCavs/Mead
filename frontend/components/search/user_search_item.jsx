import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user }) => {

  const userURL = `/users/${user.id}`

  return (
    <Link 
      className="search-item"
      to={userURL} >
      <div className="search-item-left">
        <h1 className="search-item-title">{user.name}</h1>
        <h1 className="search-item-subtitle">{user.bio}</h1>
      </div>
      <img
        className="search-item-right"
        src={user.avatar} />
    </Link>
  )
}