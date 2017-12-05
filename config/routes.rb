Rails.application.routes.draw do
  root 'home#index'
  resources :time do
    get :get_time, on: :collection
    get :get_time_now, on: :collection
    post :set_time, on: :collection
    post :publish_time_mqtt, on: :collection
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
