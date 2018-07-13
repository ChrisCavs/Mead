json.story do
  if @clap.clapable_type == 'Story'
    json.extract! @clapable, :id, :totalClaps 
    json.currentUserClaps @clapable.currentUserClaps(current_user)
  end
end

json.comment do
  if @clap.clapable_type == 'Comment'
    json.extract! @clapable, :id, :totalClaps
    json.currentUserClaps @clapable.currentUserClaps(current_user)
  end
end
