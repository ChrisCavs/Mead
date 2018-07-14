export const currentUser = state => {
  return state.entities.users[state.session.id]
}

export const commentsForStory = (state, arr) => {
  return arr.map(comId => state.entities.comments[comId])
}

export const authorOfComment = (state, comment) => {
  return state.entities.users[comment.author_id]
}

export const getPopularStories = (state) => {
  return state.entities.popular.map(id => {
    return state.entities.stories[id]
  })
}