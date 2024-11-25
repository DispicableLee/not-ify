playlist = @playlist

json.playlist do
  json.extract! playlist, :id, :title, :description, :image_url, :uploader_id, :created_at, :updated_at
  json.uploader do
    json.extract! playlist.uploader, :username
  end
end

tracks = playlist.tracks

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :url
      json.album do
        json.extract! playlist, :image_url
      end
      json.uploader do
        json.extract! track.uploader, :id, :username, :email # Add any other attributes you want
      end
    end
  end
end