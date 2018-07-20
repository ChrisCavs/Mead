import React from 'react'
import StoryForm from './story_form'
import { connect } from 'react-redux'
import { updateStory, fetchStory } from '../../actions/story_actions'
import { getCurrentUser } from '../../reducers/selectors'

class EditStoryForm extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchStory(id)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.story.id !== this.props.story.id) {
      this.props.fetchStory(newProps.story.id)
    }
  }

  render () {
    return (
      <StoryForm
        story={this.props.story}
        type={this.props.type}
        currentUser={this.props.currentUser}
        submitAction={this.props.submitAction}
        errors={this.props.errors} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const errors = state.errors.story
  const story = state.entities.stories[id]
  const defaultStory = {
    title: '',
    subtitle: '',
    body: '',
    tags: ''
  }
  return {
    story: story || defaultStory,
    type: 'Edit',
    currentUser: getCurrentUser(state),
    errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitAction: story => dispatch(updateStory(story)),
    fetchStory: id => dispatch(fetchStory(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStoryForm)
