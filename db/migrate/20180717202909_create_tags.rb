class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null:false
    end
    add_index :tags, :name, unique: true
  end
end
