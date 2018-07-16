export const fetchAllUsersAndStories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/search'
  })
}