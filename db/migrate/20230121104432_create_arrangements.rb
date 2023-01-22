class CreateArrangements < ActiveRecord::Migration[6.1]
  def change
    create_table :arrangements do |t|
      t.integer :day, null: false, default: 0
      t.integer :goal_per_day, null: false
      t.integer :done_per_day, null: false, default: 0
      t.references :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
