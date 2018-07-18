export const fetchAllStories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories'
  })
}

export const fetchStory = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${id}`
  })
}

export const fetchTagStories = name => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags/${name}`
  })
}

export const createStory = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/stories',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateStory = story => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stories/${story.id}`,
    data: story,
    contentType: false,
    processData: false
  })
}

export const destroyStory = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/stories/${id}`
  })
}