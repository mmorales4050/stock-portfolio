Rails.application.routes.draw do
  resources :sessions
  resources :users
  resources :stocks
  resources :transactions
end
