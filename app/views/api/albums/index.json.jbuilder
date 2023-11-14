albums = @albums

json.albums.each do |album|
    json.set! album.id do
        json.extract! :title, :description, :image_url
    end
end