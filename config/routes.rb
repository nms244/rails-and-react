Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users

      resources :tasks, only: %i(create index show update destroy)
      resources :arrangements, only: %i(index update)
    end
  end

end
