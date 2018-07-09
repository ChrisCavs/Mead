import StoryForm from './story_form'
import { connect } from 'react-redux'
import

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const story = state.entities.stories[id]

  return {
    formType: 'edit',
    story
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStory: story => dispatch(updateStory(story))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm)
