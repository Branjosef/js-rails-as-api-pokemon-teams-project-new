Rails.application.routes.draw do
  resources :pokemons
  resources :trainers

  # get '/pokemons' => 'pokemons#index'
  # get '/pokemons/:id' => 'pokemons#show' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
