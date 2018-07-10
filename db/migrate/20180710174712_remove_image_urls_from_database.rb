class RemoveImageUrlsFromDatabase < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :image_url
    remove_column :users, :image_url
  end
end
