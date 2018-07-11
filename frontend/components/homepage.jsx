import React from 'react'
import { connect } from 'react-redux'
import { fetchAllStories } from '../actions/story_actions'
import MainIndex from './main/main_index'

class Homepage extends React.Component {

  componentDidMount () {
    this.props.fetchAllStories()
  }

  render () {
    return (
      <div className="homepage">
        <MainIndex stories={this.props.stories} />
        {/* <PopularIndex /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const stories = Object.values(state.entities.stories)
  return {
    stories
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