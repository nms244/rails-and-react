# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User
User.create!(
  name:  "つよし",
  email: "tsuyoshi@example.com",
)

User.create!(
  name:  "raima",
  email: "raima@example.com",
)

# Task
10.times do |num|
  if num == 5
    Task.create!(
      name: "タスクNo.#{num}",
      goal: 3004,
      done: 1200,
      user_id: 2,
    )
  elsif num == 7
    Task.create!(
      name: "タスクNo.#{num}タスクNo.#{num}タスクNo.#{num}タスクNo.#{num}",
      description: "タスク#{num} タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明タスクの詳細説明",
      goal: 2000,
      unit: '単語',
      user_id: 1
    )
  else
    Task.create!(
      name: "タスクNo.#{num}",
      description: "タスク#{num} タスクの詳細説明",
      goal: 2003,
      done: 1200,
      unit: '単語',
      user_id: 1
    )
  end
end

# Arrangement
User.find(1).tasks.find_each do |task|
  Arrangement.days[:mon].upto(Arrangement.days[:fri]) do |num|
    Arrangement.create(
      day: num,
      goal_per_day: 100,
      done_per_day: 0,
      task_id: task.id
    )
  end
end

User.find(2).tasks.find_each do |task|
  Arrangement.days[:mon].upto(Arrangement.days[:fri]) do |num|
    Arrangement.create(
      day: num,
      goal_per_day: 100,
      done_per_day: 10 * num,
      task_id: task.id
    )
  end
end
