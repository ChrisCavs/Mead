import React from 'react'
import MainIndexItem from './main_index_item'

const MainIndex = ({ title, stories, editButton, additionalClasses }) => {
  
  const mappedStories = stories.map((story, i) => {
    return <MainIndexItem key={i} story={story} editButton={editButton} />
  })

  return (
    <div className={"main-index " + additionalClasses}>
      <h1 className="main-index-title">{title}</h1>

      {mappedStories}
    </div>
  )
}

export default MainIndex