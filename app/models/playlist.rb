class Playlist < ApplicationRecord
  validates :title, presence: :true
  validates :uploader_id, presence: :true

  belongs_to :uploader,
    class_name: "User",
    foreign_key: :uploader_id

    has_many :tracks

    accepts_nested_attributes_for :tracks
end
