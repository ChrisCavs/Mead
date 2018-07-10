import StoryForm from './story_form'
import { connect } from 'react-redux'
import { createStory } from '../../actions/story_actions'

const mapStateToProps = state => {
  const story = {
    title: '', subtitle: '', body: '', image_url: ''
  }
  return {
    story,
    type: 'Create'
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
