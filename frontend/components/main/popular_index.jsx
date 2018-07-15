import React from 'react'
import PopularIndexItem from './popular_index_item'

const PopularIndex = ({ stories, higherClass }) => {
  const mappedStories = stories.map((story, i) => {
    return <PopularIndexItem key={i} num={i} story={story} />
  })

  return (
    <div className={"popular-index " + higherClass}>
      <h1 className="main-index-title">
        Popular on Mead
      </h1>

      {mappedStories}
    </div>
  )
}

export default PopularIndex