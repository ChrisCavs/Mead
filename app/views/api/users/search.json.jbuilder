json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :name, :bio
      json.avatar url_for(user.avatar)
    end
  end
end

json.stories do
  @stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :subtitle
      json.image_url url_for(story.image)
    end
  end
end

json.tags @tags