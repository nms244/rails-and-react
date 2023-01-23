class Arrangement < ApplicationRecord
  with_options presence: true do
    validates :day
    validates :goal_per_day, numericality: { only_integer: true }
    validates :done_per_day, numericality: { only_integer: true }
    validates :task_id
  end

  belongs_to :task

  enum day: { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6}

  def self.rest_of_week
    # today_wday = Time.zone.today.wday
    today_wday = 3
    rest_of_weekdays = Arrangement.days.filter{|k, v|
      v >= today_wday && k != Arrangement.days[:sat]
    }.values
    self.where(day: rest_of_weekdays)
  end

  private


end
