json.stories do
  @stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :subtitle, :author_id, :body
      json.image_url url_for(story.image)
      json.date story.date
      json.time_estimate story.time_estimate
      json.tags story.all_tags
    end
  end
end

json.users do
  @stories.each do |story|
    json.set! story.author.id do
      json.extract! story.author, :id, :email, :name, :authored_story_ids
      json.avatar url_for(story.author.avatar)
      json.feedIds story.author.feed_ids
    end
  end
end