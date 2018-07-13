import React from 'react'
import MainIndexItem from './main_index_item'

const MainIndex = ({ currentUser, stories }) => {
  const mappedStories = stories.map((story, i) => {
    return <MainIndexItem key={i} story={story} />
  })

  const mainIndexTitle = currentUser ? 'Feed' : 'Recent'

  return (
    <div className="main-index">
      <h1 className="main-index-title">{mainIndexTitle}</h1>

      {mappedStories}
    </div>
  )
}

export default MainIndex