class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :isbn
      t.string :author
      t.text :review
      t.integer :rating
      t.integer :author_id
      t.integer :genre_id

      t.timestamps null: false
    end
  end
end
