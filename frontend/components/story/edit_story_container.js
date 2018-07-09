import StoryForm from './story_form'
import { connect } from 'react-redux'
import { updateStory } from '../../actions/story_actions'

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]

  return {
    title: 'edit',
    story
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitAction: story => dispatch(updateStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)
