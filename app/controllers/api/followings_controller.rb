class Api::FollowingsController < ApplicationController
  def create
    following = Following.new
    following.followed_id = params[:id]
    following.follower_id = current_user.id

    @user = User.find(params[:id])
    @currentUserFollows = true

    if following.save
      render :show
    else
      render json: following.errors.full_messages, status: 401
    end
  end

  def destroy
    following = Following.where(
      followed_id: params[:id],
      follower_id: current_user.id
    )

    following.first.destroy
    @user = User.find(params[:id])
    @currentUserFollows = false

    render :show
  end
end