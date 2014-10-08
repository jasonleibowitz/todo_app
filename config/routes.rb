Rails.application.routes.draw do
  resources :todos
  root to: 'home#index'
end
