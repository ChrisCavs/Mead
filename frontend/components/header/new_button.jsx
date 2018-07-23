import React from 'react'
import { Link } from 'react-router-dom'

export default ({addedClass}) => {
  const classes = `header-button new-button ${addedClass}`
  
  let text = 'Write a story'
  if (addedClass === 'right') {
    text = <img src={window.editImage} />
  }

  return (
    <Link
      className={classes}
      to='/stories/new'>
      {text}
    </Link>
  )
}