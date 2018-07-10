json.extract! @user, :id, :name, :bio
json.avatar url_for(@user.avatar)