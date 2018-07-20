json.stories do
  @stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :subtitle, :author_id, :body
      json.image_url url_for(story.image)
      json.date story.date
      json.time_estimate story.time_estimate
      json.tags story.all_tags
      if current_user
        json.currentUserBookmarked current_user.bookmarked_stories.include?(story)
      end
    end
  end
end

json.users do
  @stories.each do |story|
    json.set! story.author.id do
      json.extract! story.author, :id, :name, :authored_story_ids
      json.avatar url_for(story.author.avatar)
      json.feedIds story.author.feed_ids
    end
  end

  if current_user
    json.set! current_user.id do
      json.extract! current_user, :id, :name, :authored_story_ids
      json.avatar url_for(current_user.avatar)
      json.feedIds current_user.feed_ids
      json.recommendedStory current_user.recommended_story
    end
  end
end

json.popular @popular
json.tags @tags