class Api::StoriesController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    debugger
    if current_user && !current_user.followed_users_stories.empty?
      feed = current_user.followed_users_stories.includes(:author)
      @stories = feed.shuffle
    else
      @stories = Story.all.includes(:author)
    end
    render :index
  end

  def show
    @story = Story.find(params[:id])
    render :show
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 404
    end
  end

  def update
    @story = current_user.stories.where(id: params[:id])
    if @story
      if @story.update(story_params)
        render :show
      else
        render json: @story.errors.full_messages, status: 417
      end
    else
      render json: ["You cannot update that story"], status: 401
    end
  end

  def destroy
    @story = current_user.stories.where(id: params[:id])
    if @story
      @story.destroy
      render :show
    else
      render json: ["You cannot destroy that story"], status: 401
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :subtitle, :body, :image)
  end
end
