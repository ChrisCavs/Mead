export const fetchAllStories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories'
  })
}

export const fetchStory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/stories/${id}`
  })
}

export const createStory = (story) => {
  return $.ajax({
    method: 'POST',
    url: '/api/stories',
    data: { story }
  })
}

export const updateStory = (story) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stories/${story.id}`,
    data: { story }
  })
}

export const destroyStory = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/stories/${id}`
  })
}
