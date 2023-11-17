# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  url         :string           not null
#  uploader_id :bigint           not null
#  album_id    :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  playlists   :integer          default([]), is an Array
#
class Track < ApplicationRecord
    validates :title, :url, :uploader_id, presence: true


    belongs_to :album
    belongs_to :uploader,
        class_name: 'User',
        foreign_key: :uploader_id,
        primary_key: :id

    
    
end
