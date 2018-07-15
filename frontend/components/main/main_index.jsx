import React from 'react'
import MainIndexItem from './main_index_item'

const MainIndex = ({ currentUser, stories, editButton }) => {
  const mappedStories = stories.map((story, i) => {
    return <MainIndexItem key={i} story={story} editButton={editButton} />
  })

  let mainIndexTitle = currentUser ? 'Feed' : 'Recent'
  editButton ? mainIndexTitle = 'Stories' : null

  return (
    <div className="main-index">
      <h1 className="main-index-title">{mainIndexTitle}</h1>

      {mappedStories}
    </div>
  )
}

export default MainIndex