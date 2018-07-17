import React from 'react'
import MainIndex from './main_index'

const MainIndexBuffer = ({ 
  currentUser, stories, feedStories, editButton }) => {

  let feedSection

  if (currentUser && feedStories.length >= 1) {
    feedSection = <MainIndex 
      title='Feed' 
      stories={feedStories} 
      additionalClasses='' />
  }

  return (
    <div className="main">
      {feedSection}

      <MainIndex
        title='Recent'
        stories={stories} />
    </div>
  )
}

export default MainIndexBuffer