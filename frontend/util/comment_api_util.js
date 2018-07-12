export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `api/stories/${comment.story_id}/comments`,
    data: { comment }
  })
}

export const deleteComment = data => {
  return $.ajax({
    method: 'DELETE',
    url: `api/stories/${data.story_id}/comments/${data.id}`
  })
}