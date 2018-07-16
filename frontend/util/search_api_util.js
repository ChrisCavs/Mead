export const fetchAllUsersAndStories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/search'
  })
}