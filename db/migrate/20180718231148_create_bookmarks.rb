class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false
    end
    add_index :bookmarks, [:story_id, :user_id], unique: true
  end
end
