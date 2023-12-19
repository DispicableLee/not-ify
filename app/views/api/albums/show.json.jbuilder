album = @album
tracks = @album.tracks
json.album do
    json.extract! album, :id, :title, :description, :image_url, :uploader_id
end

json.tracks do
    tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :url
            json.album do
                json.extract! album, :image_url
            end
        end
    end
end

