class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.references :uploader, foreign_key: {to_table: :users}
      t.timestamps
    end

    add_index :albums, :title
  end
end
