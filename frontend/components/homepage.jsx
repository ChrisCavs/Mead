import React from 'react'
import { connect } from 'react-redux'
import { fetchAllStories } from '../actions/story_actions'
import MainIndex from './main/main_index'
import PopularIndex from './main/popular_index'
import { getPopularStories, getRecentStories } from '../reducers/selectors'
import LoadingComponent from './loading_component'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount () {
    this.props.fetchAllStories().then(
      success => this.setState({ loading: false })
    )
  }

  render () {
    if (this.state.loading) {
      return <LoadingComponent />
    }
    return (
      <div className="homepage">
        <PopularIndex 
          stories={this.props.popular} 
          higherClass={"left-popular"} />
        <MainIndex 
          stories={this.props.stories} 
          editButton={false}
          additionalClasses="" />
        <PopularIndex 
          stories={this.props.popular} 
          higherClass={"right-popular"} />
      </div>
    )
  }
}

const mapStateToProps = state => {  
  const stories = getRecentStories(state)
  const popular = getPopularStories(state)
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