json.story do
  json.extract! @story, :id, :title, :subtitle, :author_id, :body
  json.image_url url_for(@story.image)
  json.date @story.date
  json.time_estimate @story.time_estimate
end

json.user do
  json.extract! @story.author, :id, :name, :bio
  json.avatar url_for(@story.author.avatar)
  json.currentUserFollows @currentUserFollows
end
