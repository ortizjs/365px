class AddDescriptionToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :description, :string
  end
end
