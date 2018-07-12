import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../../reducers/selectors'
import { createComment } from '../../actions/comment_actions'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story_id: this.props.story_id,
      body: ''
    }
  }

  update (e) {
    this.setState({ body: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.createComment(this.state)
  }

  render () {
    return (
      <div className="comment-form">
        <div className="user-item comment-form-author-container">
          <img className="header-image" src={this.props.currentUser.avatar} />
          <h1>{this.props.currentUser.name}</h1>
        </div>

        <textarea
          className="comment-form-textarea"
          value={this.state.body}
          onChange={this.update.bind(this)} >
        </textarea>

        <button 
          onClick={this.handleSubmit.bind(this)}
          className="header-button comment-form-button" >
          Publish
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: currentUser(state)
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