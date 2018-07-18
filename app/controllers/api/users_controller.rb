class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:update]

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])

    if current_user
      followed = current_user.followed_users.where(id: @user.id)
      @currentUserFollows = !followed.empty?
    else
      @currentUserFollows = false
    end

    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find_by(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def search
    @users = User.all.with_attached_avatar
    @stories = Story.all.with_attached_image
    @tags = Tag.all.pluck(:name)

    render :search
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :bio, :avatar)
  end
end
