class AddIndexToUsers < ActiveRecord::Migration[7.0]
  def change
    add_index :users, :username
    #Ex:- add_index("admin_users", "username")
  end
end
