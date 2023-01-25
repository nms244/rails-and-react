class Api::V1::TasksController < ApplicationController

  def create
    ActiveRecord::Base.transaction do
      task = CreateTask.call(create_task_params)
      render json: { controller_action: 'tasks#create', task: task, arrangements: task.arrangements }

      # task = Task.create!(create_task_params)
      # loop_start = Arrangement.days[:mon]
      # loop_end = Arrangement.days[:fri]
      # loop_start.upto(loop_end) do |day|
      #   task.arrangements.create!(
      #     day: day, goal_per_day: 0, done_per_day: 0
      #   )
      # end
      # task.rearrange
      # render json: { controller_action: 'tasks#create', task: task, arrangements: task.arrangements }
    end
    rescue => e
      render json: {controller_action: 'tasks#create', text: e}
  end

  def index
    user = User.find(params[:user_id])
    tasks = user.tasks
    render json: { controller_action: 'tasks#index', tasks: tasks }
  end

  def show
    task = Task.find(params[:id])
    render json: { controller_action: 'tasks#show', task: task }
  end

  def update
    before_task = Task.find(params[:id])
    after_task = Task.find(params[:id])
    ActiveRecord::Base.transaction do
      after_task.update!(update_task_params)
      after_task.rearrange
      render json: {
        controller_action: 'tasks#update',
        before: {
          task: before_task,
          arrangement: before_task.arrangements
        },
        after: {
          task: after_task,
          arrangement: after_task.arrangements
        }
      }
    end
    rescue => e
      render json: { controller_action: 'tasks#update', text: e.message }
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy!
    render json: { controller_action: 'tasks#destroy', target: task }
    rescue => e
      render json: { controller_action: 'tasks#destroy', text: e.message }
  end

  private

    def create_task_params
      params.permit(:name, :description, :goal, :unit, :user_id)
    end

    def update_task_params
      params.permit(:name, :description, :goal, :unit)
    end
end
