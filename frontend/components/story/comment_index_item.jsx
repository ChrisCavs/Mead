import React from 'react'
import { authorOfComment } from '../../reducers/selectors'
import { connect } from 'react-redux'
// import ClapButton from './clap_button'

const CommentIndexItem = ({ comment, author, clapOrStory }) => {
  // let finalEl = <ClapButton id={comment.id} type="Comment" />

  // if (clapOrStory === 'story') {
  //   finalEl = <p className="comment-index-item-storyname">{storyName}</p>
  // }
  
  return (
    <div className="comment-index-item">
      <div className="story-form-author-container">
        <img className="header-image" src={author.avatar} />
        <div className="story-form-author-detail">
          <p className="story-form-author-name">{author.name}</p>
          <p className="story-form-author-date">{comment.date}</p>
        </div>
      </div>

      <p className="comment-index-item-body">{comment.body}</p>

      <div className="comment-index-clapOrStory-container">
        
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    author: authorOfComment(state, ownProps.comment)
  }
}

export default connect(
  mapStateToProps
)(CommentIndexItem)