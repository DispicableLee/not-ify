class AddIndexToPlaylistTitle < ActiveRecord::Migration[7.0]
  def change
    add_index :playlists, :title
  end
end
