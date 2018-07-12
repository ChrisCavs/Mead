export const followUser = id => {
  return $.ajax({
    method: 'POST',
    url: `api/followings/${id}`
  })
}

export const unFollowUser = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followings/${id}`
  })
}