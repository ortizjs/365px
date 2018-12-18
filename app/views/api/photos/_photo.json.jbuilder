json.extract! photo, :id, :title, :photographer_id, :category

if photo.attached_photo.attached? 
    json.photo_url url_for(photo.attached_photo)
end