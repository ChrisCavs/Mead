class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:show, :update]

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])

    followed = current_user.followed_users.where(id: @user.id)
    @currentUserFollows = !followed.empty?

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

  def feed
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :bio, :avatar)
  end
end
