json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
  json.albums @user.albums do |album|
    json.extract! album, :id, :title, :description, :image_url
  end
end

