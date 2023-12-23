json.array!(@tracks) do |track|
  json.id track.id
  json.title track.title
  json.url track.url
  json.uploader_id track.uploader_id
  json.album_id track.album_id

  json.uploader do
    json.extract! track.uploader, :id, :username # Add any other attributes you want for the uploader
  end

  json.album do
    json.extract! track.album, :id, :title, :description, :image_url, :uploader_id # Add any other attributes you want for the album
  end

  # Add more attributes as needed
end