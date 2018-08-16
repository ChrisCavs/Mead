import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../reducers/selectors'
import { createComment } from '../../actions/comment_actions'

class CommentForm extends React.Component {
  state = {
    story_id: this.props.story_id,
    body: ''
  }

  update = event => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.body === '') return

    this.props.createComment(this.state)
  }

  render () {
    return (
      <form className="comment-form">
        <div className="comment-form-author-container">
          <img className="comment-image" src={this.props.currentUser.avatar} />
          <h1>{this.props.currentUser.name}</h1>
        </div>

        <textarea
          className="comment-form-textarea"
          value={this.state.body}
          onChange={this.update.bind(this)}
          placeholder="Write a response..." >
        </textarea>

        <button 
          onClick={this.handleSubmit.bind(this)}
          className="comment-form-button" >
          Publish
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)