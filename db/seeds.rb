# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'database_cleaner'
# DatabaseCleaner.clean_with(:truncation)
p "destroying tracks"
Track.destroy_all
p "destroying albums"
Album.destroy_all
p "destroying Users"
User.destroy_all


sonic = User.create({
    username: "sonic",
    email: "sonic@example.com", 
    session_token: SecureRandom.urlsafe_base64,
    password_digest: BCrypt::Password.create("sonicsonic")
})

rob = User.create({
    username: "DispicableLee",
    email: "lee.robert053@gmail.com", 
    session_token: SecureRandom.urlsafe_base64,
    password_digest: BCrypt::Password.create("Asianman2453")
})

# goku

# jack

# cass

# louis


# 3. seed in albums
dummy = Album.create({title: "Dummy", uploader_id: rob.id, description: "this is a dummy album", image_url: "https://lemoncord.s3.amazonaws.com/songs/yungvinci_selfportrait.jpg"}) 
Album.create({title: "Robs Fun Zone", uploader_id: rob.id, description: "this is the fun zone of rob", image_url: "https://lemoncord.s3.amazonaws.com/songs/robsfuncenter.jpeg"}) 
Album.create({title: "Tenacious D", uploader_id: sonic.id, description: "hell yeah", image_url: "https://lemoncord.s3.amazonaws.com/songs/tenaciousD.jpeg"})





# 2. seed in tracks
Track.create({title: "Elysian Fields", url: 'https://lemoncord.s3.amazonaws.com/songs/artemis-elysian-fields.mp3', uploader_id: 1, album_id: dummy.id, playlists: []})
Track.create({title: "Hippies", url: 'https://lemoncord.s3.amazonaws.com/songs/hippies-feat-two-another.mp3', uploader_id: 1, album_id: dummy.id, playlists: []})
Track.create({title: "PYT (The Reflex Revision)", url: "https://lemoncord.s3.amazonaws.com/songs/pyt-the-reflex-revision.mp3", uploader_id: 1, album_id: dummy.id, playlists: []})
# 4. 
