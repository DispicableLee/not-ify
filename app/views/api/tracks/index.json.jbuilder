json.array!(@tracks) do |track|
  json.id track.id
  json.title track.title
  json.url track.url
  json.uploader_id track.uploader_id
  json.album_id track.album_id
  # Add more attributes as needed
end