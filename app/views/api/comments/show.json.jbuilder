json.story do
  json.comments_array @comment.story.comments.map(com => com.id)
end

json.comment do
  json.extract! @comment, :id, :body, :story_id, :author_id
  json.date @comment.date
end