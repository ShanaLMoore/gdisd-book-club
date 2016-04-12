  Rails.application.routes.draw do

  root "application#index"

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :books
      get "meetups", {to: "meetups#index"}
    end
  end
end

