class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[session_token])
  end

  def login!(user)

  end

  def logout!
    
  end

end
