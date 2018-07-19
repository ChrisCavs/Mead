export const makeBookmark = id => {
  return $.ajax({
    method: 'POST',
    url: `api/bookmarks/${id}`
  })
}

export const removeBookmark = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`
  })
}

export const fetchUserBookmarks = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bookmarks/${id}`
  })
}