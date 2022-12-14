Rails.application.routes.draw do
  resources :lists do
    resources :bookmarks, only: [:new, :create]
  end
  resources :movies
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
