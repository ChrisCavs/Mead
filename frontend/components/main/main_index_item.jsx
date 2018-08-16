import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainIndexItemData from './main_index_item_data'
import ProfileQuickLook from '../profile/profile_quick_look'
import BookmarkButton from '../bookmark/bookmark_button'

const MainIndexItem = ({ story, author, editButton, currentUserId }) => {
  if (!story) return <div></div>

  const storyUrl = `/stories/${story.id}`
  const authorUrl = `/users/${author.id}`
  const editUrl = `/stories/${story.id}/edit`
  
  let button
  if (editButton && author.id === currentUserId) {
    button = <Link to={editUrl} className="main-index-edit-link">Edit</Link>
  }

  return (
    <div className="main-index-item">
      <div className="main-index-item-content">
        <div className="item-story">
          <Link to={storyUrl}>
            <h1 className="item-story-title">{story.title}</h1>
            <h1 className="item-story-subtitle">{story.subtitle}</h1>
          </Link>
        </div>
        <div className="item-extra">
          <div className="item-extra-left">
            <ProfileQuickLook author={author} />
            <MainIndexItemData 
              date={story.date}
              time_estimate={story.time_estimate} />
            
            {button}
          </div>
          <BookmarkButton 
            story={story}
            currentUserId={currentUserId} />
        </div>
      </div>
      <div className="main-index-item-img">
        <img src={story.image_url} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.story.author_id]
  const currentUserId = state.session.id
  return {
    author,
    currentUserId
  }
}

export default connect(
  mapStateToProps
)(MainIndexItem)