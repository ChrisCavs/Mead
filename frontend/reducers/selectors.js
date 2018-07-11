export const currentUser = state => {
  return state.entities.users[state.session.id]
}