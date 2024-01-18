albums = @albums

albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :description, :image_url, :uploader_id
        json.uploader_username album.uploader&.username
    end
end