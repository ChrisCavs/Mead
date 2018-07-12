import React from 'react'
import { connect } from 'react-redux'
import { fetchStory } from '../../actions/story_actions'
import { followUser, unFollowUser } from '../../actions/follow_actions'
import UserItem from './user_item'
import StoryComments from './story_comments'

import { commentsForStory } from '../../reducers/selectors'

class Show extends React.Component {
  
  componentDidMount () {
    this.props.fetchStory(this.props.match.params.id)
  }

  render () {
    const story = this.props.story
    if (!story) {
      return <div></div>
    }

    const author = this.props.author
    const bodyArray = story.body.split('/r/n').map((part, i) => {
      return <p key={i} className="story-body">{part}</p>
    })
    return (
      <div className="story">

        <UserItem 
          user={author}
          story={story}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser} />

        <h1 className="story-title">
          {story.title}
        </h1>

        <h2 className="story-subtitle">
          {story.subtitle}
        </h2>

        <img className="story-image" src={story.image_url} />

        {bodyArray}

        <StoryComments 
          comments={this.props.comments}
          story={this.props.story} />

        {/* <StorySocial storyId={story.id} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let author, comments
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]
  if (story) {
    author = state.entities.users[story.author_id]
    comments = commentsForStory(state, story.comments_array)
  }

  return {
    story,
    author,
    comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: id => dispatch(fetchStory(id)),
    followUser: id => dispatch(followUser(id)),
    unFollowUser: id => dispatch(unFollowUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)