import StoryForm from './story_form'
import { connect } from 'react-redux'
import { createStory } from '../../actions/story_actions'
import { currentUser } from '../../reducers/selectors'

const mapStateToProps = state => {
  const story = {
    title: '', subtitle: '', body: ''
  }
  return {
    story,
    type: 'Create',
    currentUser: currentUser(state)
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
