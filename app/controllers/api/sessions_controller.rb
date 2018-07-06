class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render json: ['invalid credentials'], status: 404
    end
  end

  def destroy
    logout!
    render json: ['logged out']
  end
end
