class Api::UsersController < ApplicationController
    def new 
        @user = User.new
    end

    def show
        @user = User.find(params[:creatorid])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
    end
end
