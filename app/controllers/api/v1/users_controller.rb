class Api::V1::UsersController < ApplicationController

  def create
    render json: { text: 'users#create' }
  end

  def show
    render json: { text: 'users#show' }
  end

  def update
    render json: { text: 'users#update' }
  end

  def destroy
    render json: { text: 'users#destroy' }
  end

end
