class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.string :image_url
      t.text :description
      t.references :uploader, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
