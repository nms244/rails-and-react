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

# Task
Task.create!(
  name: "単語暗記",
  description: "TOEICの単語帳を1週間で4321語覚える",
  goal: 4321,
  unit: "単語",
  user_id: 1,
)

Task.create!(
  name: "筋トレ",
  description: "腕立て伏せ・上体起こし・スクワットを1週間で各1234回する",
  goal: 1234,
  unit: "回",
  user_id: 1,
)

Task.create!(
  name: "読書",
  description: "技術書を1週間で643ページ読む",
  goal: 643,
  unit: "ページ",
  user_id: 1,
)

Task.create!(
  name: "ラーメン",
  description: "ラーメンを1週間で5杯食べる",
  goal: 5,
  unit: "杯",
  user_id: 1,
)

Task.create!(
  name: "バイト",
  description: "めちゃめちゃ働いて1週間で3万稼ぐ",
  goal: 30000,
  unit: "円",
  user_id: 1,
)

Task.create!(
  name: "ランニング",
  description: "健康のために1週間に10km走る",
  goal: 10000,
  unit: "m",
  user_id: 1,
)


User.find(1).tasks.find_each do |task|
  Arrangement.days[:mon].upto(Arrangement.days[:fri]) do |num|
    Arrangement.create(
      day: num,
      goal_per_day: num == 5 ? task.goal / 5 : task.goal / 5 + task.goal % 5 ,
      done_per_day: 0,
      task_id: task.id
    )
  end
end

