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
#  camera          :string
#  lens            :string
#  iso             :string
#  focal_distance  :string
#  aperture        :string
#  shatter_speed   :string
#  location        :string
#  date_taken      :string
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
