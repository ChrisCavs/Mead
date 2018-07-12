import React from 'react'
import CommentForm from './comment_form'
import CommentIndex from './comment_index'

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

export default StoryComments