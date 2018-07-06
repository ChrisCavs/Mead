export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
}

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  })
}