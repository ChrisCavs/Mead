if @clap.clapable_type == 'Comment'
  json.comment do
    json.extract! @clapable, :id, :totalClaps
    json.currentUserClaps @clapable.currentUserClaps(current_user)
  end
else
  json.comment Hash.new
end

if @clap.clapable_type == 'Story'
  json.story do
    json.extract! @clapable, :id, :totalClaps
    json.currentUserClaps @clapable.currentUserClaps(current_user)
  end
else
  json.story Hash.new
end
