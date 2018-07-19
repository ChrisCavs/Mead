export const makeBookmark = id => {
  return $.ajax({
    method: 'PUT',
    url: `api/bookmarks/${id}`
  })
}

export const removeBookmark = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`
  })
}