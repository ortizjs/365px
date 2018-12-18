json.array! @photos do |photo|
    json.extract! photo, :id, :title, :photographer_id
    json.photo_url url_for(photo.attached_photo)
end