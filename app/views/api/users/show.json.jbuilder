json.extract! @user, :name, :bio
json.avatar url_for(@user.avatar)