  Rails.application.routes.draw do

  devise_for :users
  root "application#index"

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :books
      get "meetups", {to: "meetups#index"}
    end
  end
end

