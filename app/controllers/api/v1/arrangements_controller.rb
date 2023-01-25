class Api::V1::ArrangementsController < ApplicationController

  def update
    arrangement = Arrangement.find(params[:id])
    task = arrangement.task

    ActiveRecord::Base.transaction do
      task.update!(update_task_params)
      arrangement.update!(update_arrangement_params)
      task.rearrange
      render json: {
        controller_action: 'arrangements#update',
        task: task,
        arrangement: task.arrangements.find(arrangement.id)
      }
    end
    rescue => e
      render json: { controller_action: 'arrangements#update', text: e.message }
  end

  private
    def update_arrangement_params
      params.permit(:done_per_day)
    end

    def update_task_params
      params.permit(:name, :description, :goal, :unit)
    end
end
