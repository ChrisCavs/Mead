class Api::ClapsController < ApplicationController
  def create
    bookmark = Bookmark.new(
      user_id: current_user.id,
      story_id: params[:id]
    )

    if bookmark.save
      @story = Story.find(params[:id])
      @currentUserBookmarked = true
      render :show
    else
      render json: bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    bookmark = Bookmark.where(
      user_id: current_user.id,
      story_id: params[:id]
    )

    bookmark.first.destroy
    @story = Story.find(params[:id])
    @currentUserBookmarked = false
    
    render :show
  end
end