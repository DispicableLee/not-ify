# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

⁡⁣⁣⁢# 1. seed in users
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null


# sonic = User.create({email: "sonic@example.com", username: "sonic", })

# goku

# jack

# cass

# louis


# 2. seed in tracks


# 3. seed in albums
robs_fun_zone = Album.new({title: "Robs Fun Zone", uploader_id: 2, description: "this is the fun zone of rob"})

# 4. 
