class CreateArrangement
  include BaseService

  def initialize(task)
    @task = task
    @start = Arrangement.days[:mon]
    @end = Arrangement.days[:fri]
  end

  def call
    create_arrangement
  end

  private

  def create_arrangement
    @start.upto(@end) do |num|
      arr = Arrangement.new(params(day: num))
      arr.save!
    end
    true
  end

  def params(day:)
    {day: day, goal_per_day: 0, done_per_day: 0, task_id: @task.id}
  end
end