json.extract! photo, :id, :title, :photographer_id, :category, :camera, :lens, :date_taken, :iso, :focal_distance, :shatter_speed, :aperture, :location, :description
    json.username photo.user.username
    json.first_name photo.user.first_name
    json.last_name photo.user.last_name

if photo.attached_photo.attached? 
    json.photo_url url_for(photo.attached_photo)
end