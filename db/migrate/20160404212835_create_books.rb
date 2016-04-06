class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :isbn
      t.string :author
      t.string :genre
      t.text :review
      t.integer :rating

      t.timestamps null: false
    end
  end
end
