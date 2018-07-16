import React from 'react'
import { Link } from 'react-router-dom'

export default ({ story }) => {
  
  const storyURL = `/stories/${story.id}`

  return (
    <Link 
      className="search-item"
      to={storyURL} >
      <div className="search-item-left">
        <h1 className="search-item-title">{story.title}</h1>
        <h1 className="search-item-subtitle">{story.subtitle}</h1>
      </div>
    </Link>
  )
}