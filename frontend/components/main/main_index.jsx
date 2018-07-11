import React from 'react'
import MainIndexItem from './main_index_item'

const MainIndex = ({ stories }) => {
  const mappedStories = stories.map((story, i) => {
    return <MainIndexItem key={i} story={story} />
  })

  return (
    <div className="main-index">
      {mappedStories}
    </div>
  )
}

export default MainIndex