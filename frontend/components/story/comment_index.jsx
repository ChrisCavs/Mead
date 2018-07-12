import React from 'react'
import CommentIndexItem from './comment_index_item'

const CommentIndex = ({ comments }) => {
  
  const commentItems = comments.map((comment, i) => {
    return <CommentIndexItem key={i} comment={comment} />
  })

  return (
    <div className="comment-index">
      {commentItems}
    </div>
  )
}

export default CommentIndex