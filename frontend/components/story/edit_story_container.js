import React from 'react'
import StoryForm from './story_form'
import { connect } from 'react-redux'
import { updateStory, fetchStory } from '../../actions/story_actions'
import { currentUser } from '../../reducers/selectors'

class EditStoryForm extends React.Component {
  componentDidMount () {
    const id = this.props.story.id
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
        submitAction={this.props.submitAction} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]
  const defaultStory = {
    title: '',
    subtitle: '',
    body: ''
  }
  return {
    story: story || defaultStory,
    type: 'Edit',
    currentUser: currentUser(state)
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
