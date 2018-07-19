export const getCurrentUser = state => {
  return state.entities.users[state.session.id]
}

export const getBookmarksForUser = (state, user) => {
  if (user && user.bookmarkIds) {
    const mapped = user.bookmarkIds.map(id => state.entities.stories[id])
    if (mapped.includes(undefined)) {
      return []
    }
    return mapped
  }
  return []
}

export const commentsForStory = (state, story) => {
  const arr = story.comments_array
  if (arr) {
    return story.comments_array.map(comId => state.entities.comments[comId])
  } 
  
  return []
}

export const authorOfComment = (state, comment) => {
  return state.entities.users[comment.author_id]
}

export const authorOfStory = (state, story) => {
  if (story && story.author_id) {
    return state.entities.users[story.author_id]
  }
}

export const authorRecentStories = (state, author) => {
  const recentStoryIds = author.recentStoryIds
  if (recentStoryIds) {
    return recentStoryIds.map(id => state.entities.stories[id])
  }

  return []
}

export const getRecentStories = (state, currentUser) => {
  return Object.values(state.entities.stories).filter(story => {
    if (currentUser && currentUser.feedIds) {
      return (!state.entities.popular.includes(story.id) 
      && !currentUser.feedIds.includes(story.id))
    } else {
      return !state.entities.popular.includes(story.id)
    }
  })
}

export const getFeedStories = (state, currentUser) => {
  if (currentUser && currentUser.feedIds) {
    return currentUser.feedIds.map(id => state.entities.stories[id])
  }
  return []
}

export const getPopularStories = (state) => {
  return state.entities.popular.map(id => {
    return state.entities.stories[id]
  })
}

export const authoredStoriesForUser = (state, user) => {
  if (user.authored_story_ids) {
    return user.authored_story_ids.map(id => {
      return state.entities.stories[id]
    })
  }
}

export const getStoriesByTag = (state, tag) => {
  const stories = Object.values(state.entities.stories)
  return stories.filter(story => {
    if (story.tags) {
      return story.tags.split(', ').includes(tag)
    }
    return false
  })
}

export const getRecommendedStory = (state, currentUser) => {
  if (currentUser && currentUser.recommendedStory) {
    return state.entities.stories[currentUser.recommendedStory]
  }
}