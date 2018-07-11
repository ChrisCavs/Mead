import React from 'react'
import { connect } from 'react-redux'

const MainIndexItem = ({ story, author,  }) => {
  return (
    <div className="main-index-item">
      <div className="main-index-item-content">
        <div className="item-story">
          <h1 className="item-story-title">{story.title}</h1>
          <h1 className="item-story-subtitle">{story.subtitle}</h1>
          <h1 className="item-story-author">{author.name}</h1>
        </div>
        <div className="item-data">
          <h1 className="item-data-date">{story.date}</h1>
          <span className="item-data-dot"></span>
          <h1 className="item-data-time">{story.time_estimate}</h1>
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
  return {
    author
  }
}

export default connect(
  mapStateToProps
)(MainIndexItem)