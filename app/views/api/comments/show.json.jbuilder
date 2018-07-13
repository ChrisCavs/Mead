json.story do
  json.id @comment.story.id
  json.comments_array @comment.story.comments.map { |com| com.id }
end

json.comment do
  json.extract! @comment, :id, :body, :story_id, :author_id
  json.date @comment.date
  json.totalClaps @comment.totalClaps
end