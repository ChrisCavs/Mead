class AddQuantityToClaps < ActiveRecord::Migration[5.2]
  def change
    add_column :claps, :quantity, :integer
  end
end
