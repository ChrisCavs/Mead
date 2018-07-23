import React from 'react'
import MainIndex from './main_index'
import TagLinkContainer from '../tags/tag_link_container'

const MainIndexBuffer = ({ 
  currentUser, stories, feedStories, tags, editButton 
}) => {

  let feedSection

  if (currentUser && feedStories.length >= 1) {
    feedSection = (
      <MainIndex 
        title='Feed' 
        stories={feedStories} 
        additionalClasses='' 
      />
    )
  }

  return (
    <div className="main">
      {feedSection}

      <TagLinkContainer
        tags={tags}
        tagClasses='tag-link-button'
        containerClasses='mobile-tag-container' />

      <MainIndex
        title='Recent'
        stories={stories} />
    </div>
  )
}

export default MainIndexBuffer