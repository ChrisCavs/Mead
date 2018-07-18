import React from 'react'
import { Link } from 'react-router-dom'

const TagLink = ({ tag }) => {
  const tagURL = `/tags/${tag}`
  const capTagName = tag.toUpperCase()

  return (
    <Link to={tagURL}>
      <h1 className='tag-link-button'>{capTagName}</h1>
    </Link>
  )
}

export default TagLink