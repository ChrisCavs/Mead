import React from 'react'
import { connect } from 'react-redux'
import { fetchStory } from '../../actions/story_actions'
import { followUser, unFollowUser } from '../../actions/follow_actions'
import UserItem from './user_item'
import StoryComments from '../comments/story_comments'
import ClapButton from '../clap/clap_button'
import { authorOfStory } from '../../reducers/selectors'
import LoadingComponent from '../loading_component'
import TagLink from '../tags/tag_link'

class Show extends React.Component {

  state = { loading: true }
  
  componentDidMount () {
    this.props.fetchStory(this.props.match.params.id).then(
      success => this.setState({ loading: false })
    )
  }

  render () {
    if (this.state.loading) {
      return <LoadingComponent />
    }

    const story = this.props.story
    const author = this.props.author

    const tagLinks = story.tags.split(', ').map((tag,i) => {
      return <TagLink key={i} tag={tag} />
    })

    return (
      <div className="story">

        <UserItem 
          user={author}
          story={story} />

        <h1 className="story-title">
          {story.title}
        </h1>

        <h2 className="story-subtitle">
          {story.subtitle}
        </h2>

        <img className="story-image" src={story.image_url} />

        <div className="story-tag-container">
          {tagLinks}
        </div>

        <p className="story-body">{story.body}</p>

        <ClapButton content={story} type="Story" />

        <StoryComments 
          story={this.props.story} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]
  const author = authorOfStory(state, story)

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