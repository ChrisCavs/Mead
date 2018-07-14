import React from 'react'
import { connect } from 'react-redux'
import { fetchAllStories } from '../actions/story_actions'
import MainIndex from './main/main_index'
import { getPopularStories } from './reducers/selectors'

class Homepage extends React.Component {

  componentDidMount () {
    this.props.fetchAllStories()
  }

  render () {
    return (
      <div className="homepage">
        <MainIndex stories={this.props.stories} />
        <PopularIndex stories={this.props.popular} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const stories = Object.values(state.entities.stories)
  const popular = getPopularStories()
  return {
    stories,
    popular
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)