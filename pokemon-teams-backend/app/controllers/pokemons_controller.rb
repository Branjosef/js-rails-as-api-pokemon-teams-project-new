class PokemonsController < ApplicationController

  def index  
    pokemons = Pokemon.all
    render json: pokemons
  end

  def show  
    pokemon = Pokemon.find_by(id: params[:id])
    render json: pokemon
  end

  def create
    pokemon = Pokemon.new(
      nickname: Faker::Name.first_name, 
      species: Faker::Games::Pokemon.name,
      trainer_id: params[:trainer_id]
       )
    #byebug
    pokemon.save
    render json: pokemon
  end

  def destroy
    pokemon = Pokemon.find_by(id: params[:id])
    pokemon.destroy
  end

end
