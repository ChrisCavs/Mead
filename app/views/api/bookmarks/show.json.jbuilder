json.story do
  json.id @story.id
  json.currentUserBookmarked @currentUserBookmarked
end

json.user do
  json.id current_user.id
  json.bookmarkIds current_user.bookmark_ids
end