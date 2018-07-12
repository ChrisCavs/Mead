json.story do
  json.extract! @story, :id, :title, :subtitle, :author_id, :body
  json.image_url url_for(@story.image)
  json.date @story.date
  json.time_estimate @story.time_estimate
  json.comments_array @story.comments.map(com => com.id)
end

json.user do
  json.extract! @story.author, :id, :name, :bio
  json.avatar url_for(@story.author.avatar)
  json.currentUserFollows @currentUserFollows
end

json.comments do
  @story.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :story_id, :author_id
    end
  end
end
