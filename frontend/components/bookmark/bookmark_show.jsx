import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getBookmarksForUser } from '../../reducers/selectors'
import MainIndex from '../main/main_index'

class BookmarkShow extends React.Component {

  componentDidMount () {
    if (this.props.stories[0] === undefined) {
      this.props.fetchUserBookmarks(this.props.currentUser)
    }
  }

  render () {
    return (
      <MainIndex
        title="Bookmarks"
        stories={this.props.stories}
        editButton={false}
        additionalClasses='' />
    )
  }
}

const mapStateToProps = state => {
  const currentUser = getCurrentUser(state)
  const stories = getBookmarksForUser(state, currentUser)
  return {
    currentUser,
    stories
  }
}


export default connect(
  mapStateToProps
)(BookmarkShow)