export const currentUser = state => {
  return state.entities.users[state.session.id]
}

export const commentsForStory = (state, arr) => {
  return arr.map(comId => state.entities.comments[comId])
}

export const authorOfComment = (state, comment) => {
  return state.entities.users[comment.author_id]
}

export const authorOfStory = (state, story) => {
  if (story && story.author_id) {
    return state.entities.users[story.author_id]
  }
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