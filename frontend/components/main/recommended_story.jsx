import React from 'react'
import { connect } from 'react-redux'
import { authorOfStory } from '../../reducers/selectors'
import RecommendedStoryItem from './recommended_story_item'

const RecommendedStory = ({story, author}) => {
  let content

  if (story) {
    content = <RecommendedStoryItem story={story} author={author} />
  } else {
    content = <p className="recommend-story-warning">Clap stories you like to generate recommendations.</p>
  }

  return (
    <div className="recommended-container">
      <h1 className="main-index-title">Recommended</h1>
      {content}
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  const author = authorOfStory(state, ownProps.story)
  return {
    author
  }
}

export default connect(
  mapStateToProps
)(RecommendedStory)