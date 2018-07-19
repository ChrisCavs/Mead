Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]

    resources :stories do
      resources :comments, only: [:create, :destroy]
    end

    post '/followings/:id', to: 'followings#create'
    delete '/followings/:id', to: 'followings#destroy'

    get '/bookmarks/:id', to: 'bookmarks#show'
    post '/bookmarks/:id', to: 'bookmarks#create'
    delete '/bookmarks/:id', to: 'bookmarks#destroy'

    post '/claps', to: 'claps#create'

    get '/search', to: 'users#search'
    get '/tags/:name', to: 'stories#tag'
  end
end
