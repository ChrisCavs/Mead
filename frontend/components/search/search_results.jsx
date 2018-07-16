import React from 'react'
import { connect } from 'react-redux'
import UserSearchItem from './user_search_item'
import StorySearchItem from './story_search_item'

const SearchResults = ({ query, users, stories }) => {

  const reg = new RegExp(query)

  const userMatches = users.filter(user => {
    return (reg.match(user.name) || reg.match(user.bio))
  })

  const storyMatches = stories.filter(story => {
    return (reg.match(story.title) || reg.match(story.subtitle))
  })

  const userResults = userMatches.map(user => <UserSearchItem user={user} />)
  const storyResults = storyMatches.map(story => <StorySearchItem story={story} />)

  return (
    <div className="search-results">
      <h1 className="search-results-title">People</h1>
      {userResults}

      <h1 className="search-results-title">Stories</h1>
      {storyResults}
    </div>
  )
}

const mapStateToProps = state => {
  const stories = Object.values(state.entities.stories)
  const users = Object.values(state.entities.users)
  return {
    stories,
    users
  }
}

export default connect(
  mapStateToProps
)(SearchResults)