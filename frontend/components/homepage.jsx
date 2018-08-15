import React from 'react'
import { connect } from 'react-redux'
import { fetchAllStories } from '../actions/story_actions'
import MainIndexBuffer from './main/main_index_buffer'
import PopularIndex from './main/popular_index'
import { getPopularStories, getRecentStories, getFeedStories, getCurrentUser, getRecommendedStory } from '../reducers/selectors'
import LoadingComponent from './loading_component'
import TagLinkContainer from './tags/tag_link_container'
import RecommendedStory from './main/recommended_story'

class Homepage extends React.Component {

  state = { loading: true }

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

        <MainIndexBuffer
          currentUser={this.props.currentUser}
          stories={this.props.stories}
          feedStories={this.props.feedStories}
          tags={this.props.tags}
          editButton={false} />

        <div className="homepage-right">
          <TagLinkContainer
            tags={this.props.tags}
            containerClasses='right-tag-container' />

          <RecommendedStory
            story={this.props.recommended} />
            
          <PopularIndex 
            stories={this.props.popular} 
            higherClass={"right-popular"} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {  
  const currentUser = getCurrentUser(state)

  const stories = getRecentStories(state, currentUser)
  const feedStories = getFeedStories(state, currentUser)
  const popular = getPopularStories(state)
  const recommended = getRecommendedStory(state, currentUser)

  const tags = state.entities.tags

  return {
    stories,
    popular,
    recommended,
    currentUser,
    feedStories,
    tags
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