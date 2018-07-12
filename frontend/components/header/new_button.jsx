import React from 'react'
import { Link } from 'react-router-dom'

export default ({addedClass}) => {
  const classes = `header-button new-button ${addedClass}`
  return (
    <Link
      className={classes}
      to='/stories/new'>
      Write a story
    </Link>
  )
}