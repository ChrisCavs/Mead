class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = Comment.find_by(story_id: params[:id], author_id: current_user.id)

    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:story_id, :body)
  end
end