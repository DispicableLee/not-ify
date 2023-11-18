album = @album
tracks = @album.tracks
json.album do
    json.extract! album, :id, :title, :description, :image_url
end

json.tracks do
    tracks.each do |track|
        json.set! track.id do
            json.extract! track, :title, :url
        end
    end
end