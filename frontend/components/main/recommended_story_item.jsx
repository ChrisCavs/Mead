import React from 'react'
import { Link } from 'react-router-dom'
import MainIndexItemData from './main_index_item_data'
import ProfileQuickLook from '../profile/profile_quick_look'

const RecommendedStoryItem = ({ story, author }) => {
  const storyUrl = `/stories/${story.id}`

  return (
    <div className="recommended-item">
      <div className="recommended-item-content">
        <div className="popular-story">
          <Link to={storyUrl}>
            <h1 className="popular-story-title">{story.title}</h1>
          </Link>

          <ProfileQuickLook author={author} />
        </div>

        <MainIndexItemData
          date={story.date}
          time_estimate={story.time_estimate} />
      </div>
    </div>
  )
}

export default RecommendedStoryItem