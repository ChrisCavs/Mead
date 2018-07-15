import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainIndexItemData from './main_index_item_data'

const PopularIndexItem = ({ story, author, num }) => {
  const storyUrl = `/stories/${story.id}`
  const authorUrl = `/users/${author.id}`

  return (
    <div className="popular-index-item">
      <p className="popular-index-item-num">0{num + 1}</p>
      <div className="popular-index-item-content">
        <div className="popular-story">
          <Link to={storyUrl}>
            <h1 className="popular-story-title">{story.title}</h1>
          </Link>
          <Link to={authorUrl}>
            <h1 className="popular-story-author">{author.name}</h1>
          </Link>
        </div>
        <MainIndexItemData
          date={story.date}
          time_estimate={story.time_estimate} />
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
)(PopularIndexItem)