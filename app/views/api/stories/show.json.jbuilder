json.story do
  json.extract! @story, :id, :title, :subtitle, :body, :author_id
  json.image_url url_for(@story.image)
end

json.user do
  json.extract! @story.author, :name, :bio
  json.avatar url_for(@story.author.avatar)
end
