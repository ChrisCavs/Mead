json.user do
  json.extract! @user, :name, :image_url, :bio
end

json.stories do
  @user.authored_stories.each do |story|
    json.set! story.id do
      json.extract! story, 
    end
  end
end