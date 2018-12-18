@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :title, :photographer_id

        if photo.attached_photo.attached? 
            json.photo_url url_for(photo.attached_photo)
        end
    end
end


