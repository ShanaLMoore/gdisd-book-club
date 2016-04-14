  Rails.application.routes.draw do

  root "application#index"
  devise_for :users
  resources :users

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :books
      get "meetups", {to: "meetups#index"}

      resources :jobs
    end
  end
end

