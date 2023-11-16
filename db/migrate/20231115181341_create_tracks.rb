class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.references :uploader, null: false, foreign_key: {to_table: :users}
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end

    add_column :tracks, :playlists, :integer, array: true, default: []
    add_index :tracks, :playlists
    #Ex:- add_index("admin_users", "username")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
