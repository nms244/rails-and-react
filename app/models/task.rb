class Task < ApplicationRecord
  with_options presence: true do
    validates :name, length: { maximum: 32 }
    validates :goal, numericality: { only_integer: true }
    validates :done, numericality: { only_integer: true }
    validates :user_id
  end
  validates :description, length: { maximum: 256 }

  belongs_to :user
  has_many :arrangements, dependent: :destroy

  # userインスタンスを引数にし、そのuserのタスクの各曜日のarrangementのdone_per_dayからTask.doneを再計算し更新する。
  # 引数がnil（デフォルト値）の場合は全userのタスクについて上記操作を行う。
  # TODO: Task.allをself.allにできるか検証
  def self.reset_done(user: nil)
    target_tasks = user.present? ? user.tasks : Task.all
    target_tasks.find_each do |task|
      done_sum = task.arrangements.sum(:done_per_day)
      task.update!(done: done_sum)
    end
    true
  end

  # あるtaskに対して、今日を含む残りの平日でgoalを割り、arrangementを更新する。
  # TODO: 例外が出たらrollbackし、falseを返す
  def rearrange
    target_arrangements = self.arrangements.rest_of_week
    target_num = target_arrangements.size
    target_arrangements.find_each do |arr|
      arr.goal_per_day = arr.day_before_type_cast == Arrangement.days[:fri] ? self.goal_left / target_num + self.goal_left % target_num : self.goal_left / target_num
      arr.save!
    end
  end

  def goal_left
    goal - done
  end

  private

end
