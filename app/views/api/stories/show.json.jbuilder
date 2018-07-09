json.story do
  json.extract! @story, :id, :title, :subtitle, :body, :image_url, :author_id
end

json.user do
  json.extract! @story.author, :name, :image_url, :bio
end
