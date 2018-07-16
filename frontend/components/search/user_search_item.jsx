import React from 'react'

export default ({ user }) => {
  return (
    <div className="search-item">
      <div className="search-item-left">
        <h1 className="search-item-title">{user.name}</h1>
        <h1 className="search-item-subtitle">{user.bio}</h1>
      </div>
      <img
        className="search-item-right"
        src={user.avatar} />
    </div>
  )
}