import React from 'react'
import { connect } from 'react-redux'
import { fetchStory } from '../../actions/story_actions'
// import UserItem from './user_item'

class Show extends React.Component {
  
  componentDidMount () {
    this.props.fetchStory(this.props.match.params.id)
  }

  render () {
    const story = this.props.story
    const author = this.props.author
    if (!story) {
      return <div></div>
    }
    return (
      <div className="story">

        {/* <UserItem user={author} /> */}

        <h1 className="story-title">
          {story.title}
        </h1>

        <img className="story-image" src={story.image_url} />

        <h2 className="story-subtitle">
          {story.subtitle}
        </h2>

        <p className="story-body">
          {story.body}
        </p>

        {/* <StorySocial storyId={story.id} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let author
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]
  if (story) {
    author = state.entities.users[story.author_id]
  }
  return {
    story,
    author
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStory: id => dispatch(fetchStory(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)