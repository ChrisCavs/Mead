export const currentUser = state => {
  return state.entities.users[state.session.id]
}

export const commentsForStory = (state, arr) => {
  return arr.map(comId => state.entities.comments[comId])
}