class Api::PhotosController < ApplicationController
    
    def index 
        # debugger
        @photos = Photo.all
        render :index
    end 
    
    def show 
        @photo = Photo.find(params[:id])
        render :show
    end

    def create 
        @photo = Photo.new(photo_post_params)
        if @photo.save
            render :show 
        else
            render json: @photo.errors.full_messages, status: 404
        end
    end

    def update

    end

    def destroy 

    end

    private
    def photo_post_params
        params.require(:photo).permit(:title, :photographer_id, :attached_photo)    
    end
end