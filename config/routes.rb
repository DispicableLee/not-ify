Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # config/routes.rb
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resources :albums, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :tracks, only: [:index]
  end

  get '*path', to: "static_pages#frontend_index"
end
