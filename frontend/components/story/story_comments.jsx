import React from 'react'
import { connect } from 'react-redux'
import CommentForm from './comment_form'
import CommentIndex from './comment_index'
import { commentsForStory } from '../../reducers/selectors'

const StoryComments = ({ comments, story }) => {

  return (
    <div className="story-comments-container">
      <CommentForm 
        story_id={story.id} />

      <CommentIndex 
        comments={comments} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let comments = []
  const array = story.comments_array
  if (array) {
    comments = commentsForStory(state, array)
  }

  return {
    comments
  }
}

export default connect (
  mapStateToProps
)(StoryComments)