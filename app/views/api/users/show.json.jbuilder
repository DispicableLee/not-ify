albums = @user.albums
json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
end

json.albums do 
  albums.each do |album|
    json.set! album.id do
      json.extract! album :
    end
  end
end