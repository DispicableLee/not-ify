# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_21_153340) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.bigint "uploader_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["title"], name: "index_albums_on_title"
    t.index ["uploader_id"], name: "index_albums_on_uploader_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.string "url", null: false
    t.bigint "uploader_id", null: false
    t.bigint "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "playlists", default: [], array: true
    t.string "image_url"
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["playlists"], name: "index_tracks_on_playlists"
    t.index ["uploader_id"], name: "index_tracks_on_uploader_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "albums", "users", column: "uploader_id"
  add_foreign_key "tracks", "albums"
  add_foreign_key "tracks", "users", column: "uploader_id"
end
