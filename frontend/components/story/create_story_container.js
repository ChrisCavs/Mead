import StoryForm from './story_form'
import { connect } from 'react-redux'
import { createStory } from '../../actions/story_actions'
import { getCurrentUser } from '../../reducers/selectors'

const mapStateToProps = state => {
  const story = {
    title: '', subtitle: '', body: '', tags: ''
  }
  const errors = state.errors.story
  return {
    story,
    type: 'Create',
    currentUser: getCurrentUser(state),
    errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitAction: story => dispatch(createStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)
