album = @album

json.album do
    json.extract! album, :id, :title, :description, :image_url
end