# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  uploader_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
class Album < ApplicationRecord
    validates :title, presence: :true
    # validates :description, allow_nil: :true
    validates :uploader_id, presence: :true

    belongs_to :uploader, 
        class_name: "User", 
        foreign_key: :uploader_id
        
    has_many :tracks, dependent: :destroy
    accepts_nested_attributes_for :tracks
end
