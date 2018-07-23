import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getBookmarksForUser } from '../../reducers/selectors'
import MainIndex from '../main/main_index'
import { fetchUserBookmarks } from '../../actions/bookmark_actions'
import LoadingComponent from '../loading_component'

class BookmarkShow extends React.Component {

  state = { loading: true }

  componentDidMount () {
    this.props.fetchUserBookmarks(this.props.currentUser.id).then(
      this.setState({ loading: false })
    )
  }

  render () {
    if (this.state.loading) {
      return <LoadingComponent />
    }

    return (
      <MainIndex
        title="Bookmarks"
        stories={this.props.stories}
        editButton={false}
        additionalClasses='tag-main-index' />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBookmarks: id => dispatch(fetchUserBookmarks(id))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkShow)