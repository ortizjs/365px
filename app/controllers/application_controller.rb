class ApplicationController < ActionController::Base
    helper_method :current_user, :is_logged_in?

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def require_login
        redirect_to new_session_url unless is_logged_in?
    end

    def is_logged_in?
        !!current_user
    end

    def logout
        current_user.reset_sesion_token!
        session[:session_token] = nil
    end
end
