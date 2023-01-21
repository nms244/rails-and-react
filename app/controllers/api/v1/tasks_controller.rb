class Api::V1::TasksController < ApplicationController

  def create
    render json: { text: 'tasks#create' }
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
end
