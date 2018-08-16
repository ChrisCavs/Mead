import React from 'react'
import { connect } from 'react-redux'
import { makeBookmark, removeBookmark } from '../../actions/bookmark_actions'

class BookmarkButton extends React.Component {

  handleClick = event => {
    if (!this.props.currentUserId) return

    if (this.props.story.currentUserBookmarked) {
      this.props.removeBookmark(this.props.story.id)
    } else {
      this.props.makeBookmark(this.props.story.id)
    }
  }

  render () {
    const story = this.props.story
    let image = window.bookmarkOpen

    if (story.currentUserBookmarked) {
      image = window.bookmarkSolid
    }

    return (
      <button 
        className="bookmark-button"
        onClick={this.handleClick.bind(this)}>
        <img src={image} />
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeBookmark: id => dispatch(makeBookmark(id)),
    removeBookmark: id => dispatch(removeBookmark(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(BookmarkButton)