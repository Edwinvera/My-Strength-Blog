Rails.application.routes.draw do
  resources :muscles
  resources :movements
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/muscles/:muscle_id/movements/:id', to: 'movements#add_muscle'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
