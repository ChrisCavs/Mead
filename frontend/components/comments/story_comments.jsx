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
  const story = ownProps.story
  const comments = commentsForStory(state, story)

  return {
    comments
  }
}

export default connect (
  mapStateToProps
)(StoryComments)