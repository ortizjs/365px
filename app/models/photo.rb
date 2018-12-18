# == Schema Information
#
# Table name: photos
#
#  id              :bigint(8)        not null, primary key
#  title           :string           not null
#  image_url       :string
#  category        :string
#  photographer_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Photo < ApplicationRecord
    validates :title,  presence: true

    has_one_attached :attached_photo

    belongs_to :user,
    foreign_key: :photographer_id,
    class_name: :User
end
