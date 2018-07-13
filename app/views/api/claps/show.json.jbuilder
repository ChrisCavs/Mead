if @clap.clapable_type == 'Comment'
  json.comment do
    json.extract! @clapable, :id, :totalClaps
  end
else
  json.comment Hash.new
end

if @clap.clapable_type == 'Story'
  json.story do
    json.extract! @clapable, :id, :totalClaps
  end
else
  json.story Hash.new
end
