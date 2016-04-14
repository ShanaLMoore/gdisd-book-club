class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.string :company_name
      t.string :location
      t.string :url

      t.timestamps null: false
    end
  end
end
