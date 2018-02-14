Rails.application.routes.draw do
  root 'pages#home'

  get 'pages/candlesticks'
  get 'pages/candlesticks_combo'
  get 'pages/chartkick'
  get 'pages/my_json'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
