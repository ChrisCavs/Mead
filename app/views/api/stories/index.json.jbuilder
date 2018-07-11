json.stories do
  @stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :subtitle, :author_id
      json.image_url url_for(story.image)
      json.date story.time_estimate
    end
  end
end

json.users do
  @stories.each do |story|
    json.set! story.author.id do
      json.extract! story.author, :id, :email, :name, :image_url
    end
  end
end
