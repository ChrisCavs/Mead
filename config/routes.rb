Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]

    resources :stories do
      resources :comments, only: [:create, :destroy]
      post '/taggings', to: 'taggings#modify'
    end

    
    post '/followings/:id', to: 'followings#create'
    delete '/followings/:id', to: 'followings#destroy'

    post '/claps', to: 'claps#create'

    get '/search', to: 'users#search'
  end
end
