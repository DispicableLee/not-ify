playlists = @playlists

playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :description, :image_url, :uploader_id
    json.uploader_username playlist.uploader&.username
  end
end