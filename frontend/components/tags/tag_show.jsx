import React from 'react'
import MainIndex from '../main/main_index'
import LoadingComponent from '../loading_component'
import { getStoriesByTag } from '../../reducers/selectors'
import { fetchTagStories } from '../../actions/story_actions'
import { connect } from 'react-redux'

class TagShow extends React.Component {

  state = { loading: true }

  componentDidMount () {
    this.props.fetchTagStories(this.props.match.params.name).then(
      success => this.setState({ loading: false })
    )
  }

  render () {
    if (this.state.loading) {
      return <LoadingComponent />
    }

    const tagName = this.props.match.params.name
    const capTagName = tagName[0].toUpperCase() + tagName.slice(1)

    return (
      <MainIndex 
        title={capTagName}
        stories={this.props.stories}
        editButton={false}
        additionalClasses='tag-main-index' />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const stories = getStoriesByTag(state, ownProps.match.params.name)
  return {
    stories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTagStories: tag => dispatch(fetchTagStories(tag))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagShow)