import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUser } from '../../actions/user_actions'
import { authorRecentStories } from '../../reducers/selectors'
import FollowButton from './follow_button'

class QuickLook extends React.Component {

  state = { 
    loading: true,
    classes: 'quick-look show'
  }

  componentDidMount () {
    this.props.fetchUser(this.props.authorId).then(
      success => this.setState({ loading: false })
    )
  }

  handleUnmounting = () => {
    this.setState({ classes: 'quick-look' }, () => {
      setTimeout(this.props.hidePop, 200)
    })
  }

  render () {

    if (this.state.loading) {
      return <div className="quick-look"></div>
    }

    const author = this.props.author
    const authorURL = `/users/${author.id}`
    const recentStories = this.props.recentStories

    const recentStoriesLinks = recentStories.map((story, i) => {
      const storyURL = `/stories/${story.id}`
      return (
        <Link key={i} to={storyURL}>
          <div><span>{i + 1}.</span><h1 className="quick-look-story">{story.title}</h1></div>
        </Link>
      )
    })

    return (
      <div 
        className={this.state.classes}
        onMouseLeave={this.handleUnmounting}>

        <div className="quick-look-arrow"></div>

        <div className="quick-look-content">
          <div className="quick-look-top">
            <div>
              <Link to={authorURL} >
                <h1 className="quick-look-name">{author.name}</h1>
              </Link>
              <h1 className="quick-look-userSince">Member since {author.userSince}</h1>
              <h1 className="quick-look-bio">{author.bio}</h1>
            </div>
            <img 
              className="quick-look-avatar"
              src={author.avatar} />
          </div>

          <div className="quick-look-recent-stories">
            <h1 className="quick-look-recent">RECENT</h1>
             {recentStoriesLinks}
          </div>

          <div className="quick-look-bottom">
            <h1 className="quick-look-followCount">{author.numFollowers} followers</h1>
            <FollowButton user={author} addClasses="quick-look-follow" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const author = state.entities.users[ownProps.authorId]
  const recentStories = authorRecentStories(state, author)
  return {
    author,
    recentStories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickLook)