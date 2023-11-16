album = @album

json.set! album.id do
    json.extract! album, :id, :title, :description, :image_url
end
