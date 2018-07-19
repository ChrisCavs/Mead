json.user do
  json.extract! user, :id, :name, :bio, :authored_story_ids
  json.avatar url_for(user.avatar)
  json.feedIds user.feed_ids
  json.recommendedStory user.recommended_story
  json.bookmarkIds user.bookmark_ids
end

if user.authored_stories.empty?
  json.stories Hash.new
else
  json.stories do
    user.authored_stories.each do |story|
      json.set! story.id do
        json.extract! story, :id, :title, :subtitle, :author_id, :body
        json.image_url url_for(story.image)
        json.date story.date
        json.time_estimate story.time_estimate
        json.comments_array story.comments.map {|com| com.id}
        json.totalClaps story.totalClaps
      end
    end
  end
end
