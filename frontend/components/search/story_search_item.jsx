import React from 'react'

export default ({ story }) => {
  return (
    <div className="search-item">
      <div className="search-item-left">
        <h1 className="search-item-title">{story.title}</h1>
        <h1 className="search-item-subtitle">{story.subtitle}</h1>
      </div>
    </div>
  )
}