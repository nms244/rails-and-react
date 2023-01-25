class Api::V1::TasksController < ApplicationController

  def create
    # CreateTask.call(create_task_params)
    ActiveRecord::Base.transaction do
      @task = Task.create!(create_task_params)
      loop_start = Arrangement.days[:mon]
      loop_end = Arrangement.days[:fri]
      loop_start.upto(loop_end) do |day|
        @task.arrangements.create!(
          day: day, goal_per_day: 0, done_per_day: 0
        )
      end
      @task.rearrange
      render json: { controller_action: 'tasks#create', text: 'taskとarrangementの保存に成功しました' }
    end
    rescue => e
      render json: {controller_action: 'tasks#create', text: e.message }
  end

  def index
    render json: { text: 'tasks#index' }
  end

  def show
    render json: { text: 'tasks#show' }
  end

  def update
    render json: { text: 'tasks#update' }
  end

  def destroy
    render json: { text: 'tasks#destroy' }
  end

  private

    def create_task_params
      params.permit(:name, :description, :goal, :done, :unit, :user_id)
    end
end
