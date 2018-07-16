export const currentUser = state => {
  return state.entities.users[state.session.id]
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

export const authorTopStories = (state, author) => {
  const topStoryIds = author.topStoryIds
  if (topStoryIds) {
    return topStoryIds.map(id => state.entities.stories[id])
  }
  
  return []
}

export const getRecentStories = state => {
  return Object.values(state.entities.stories).filter(story => {
    return !state.entities.popular.includes(story.id)
  })
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