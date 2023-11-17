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
#
#   create_table "albums", force: :cascade do |t|
#     t.string "title", null: false
#     t.text "description"
#     t.bigint "uploader_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["title"], name: "index_albums_on_title"
#     t.index ["uploader_id"], name: "index_albums_on_uploader_id"
#   end
class Album < ApplicationRecord
    validates :title, presence: :true
    # validates :description, allow_nil: :true
    validates :uploader_id, presence: :true

    belongs_to :uploader, 
        class_name: "User", 
        foreign_key: :uploader_id

    has_many :tracks
end
