album = @album
tracks = @album.tracks
json.album do
    json.extract! album, :id, :title, :description, :image_url, :uploader_id
    json.uploader do
        json.extract! album.uploader, :username
  end
end

json.tracks do
    tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :url
            json.album do
                json.extract! album, :image_url
            end
            json.uploader do
                json.extract! track.uploader, :id, :username, :email # Add any other attributes you want
            end
        end
    end
end

