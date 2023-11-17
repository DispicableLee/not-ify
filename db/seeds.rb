# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'database_cleaner'
# DatabaseCleaner.clean_with(:truncation)



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
dummy = Album.create({title: "Dummy", uploader_id: rob.id, description: "this is a dummy album"}) 
Album.create({title: "Robs Fun Zone", uploader_id: rob.id, description: "this is the fun zone of rob"}) 
Album.create({title: "Tenacious D", uploader_id: sonic.id, description: "hell yeah"})





# 2. seed in tracks
Track.create({title: "Elysian Fields", url: 'https://lemoncord.s3.amazonaws.com/songs/artemis-elysian-fields.mp3', uploader_id: 1, album_id: dummy.id, playlists: []})
Track.create({title: "HIppies", url: 'https://lemoncord.s3.amazonaws.com/songs/hippies-feat-two-another.mp3', uploader_id: 1, album_id: dummy.id, playlists: []})

# 4. 
