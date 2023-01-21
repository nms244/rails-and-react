class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.integer :goal, null: false
      t.integer :done, null: false, default: 0
      t.string :unit
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
