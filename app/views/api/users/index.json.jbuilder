@users.each do |user|
  json.set! user.id do
    json.extract! user, :name, :image_url, :bio
  end
end