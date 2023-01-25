class CreateTask
  include BaseService

  def initialize(params)
    @params = params
  end

  def call
    create_task &&
      create_arrangements &&
        task_rearrange &&
          @task
  end

  private

  def create_task
    @task = Task.new(@params)
    @task.save!
  end

  def create_arrangements
    CreateArrangement.call(@task)
  end

  def task_rearrange
    @task.rearrange
  end
end