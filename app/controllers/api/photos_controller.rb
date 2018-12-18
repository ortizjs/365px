class Api::PhotosController < ApplicationController
    
    def index 
        @photos = Photo.all
        render "api/photos/index"
    end 
    
    def show 
        @photo = Photo.find(params[:id])
        render "api/photos/show"
    end

    private
    def photo.params
        params.require(:photo).permit(:title, :photographer_id)    
    end
end