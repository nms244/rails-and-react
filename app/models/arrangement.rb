class Arrangement < ApplicationRecord
  belongs_to :task

  enum day: { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6}

  def rest_of_week
    today_wday = Time.zone.today.wday
    rest_of_weekdays = Arrangement.days.filter!{|k, v
      v >= today_wday && k != Arrangements.days[:sat]
    }.values
    self.where(day: rest_of_weekdays)
  end

  private


end
