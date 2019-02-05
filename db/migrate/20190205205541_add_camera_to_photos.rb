class AddCameraToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :camera, :string
    add_column :photos, :lens, :string
    add_column :photos, :iso, :string
    add_column :photos, :focal_distance, :string
    add_column :photos, :aperture, :string
    add_column :photos, :shatter_speed, :string
    add_column :photos, :location, :string
    add_column :photos, :date_taken, :string
  end
end
