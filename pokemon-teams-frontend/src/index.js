const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main(){
  fetchTrainers();
  pokemonTeam();
}

function fetchTrainers() {fetch('http://localhost:3000/trainers')
  .then(resp => resp.json())
  .then(json =>  trainersIndex(json))
}

function trainersIndex(trainers){
  const mainCollection = document.getElementById('main')
  trainers.forEach(trainer => {
    const divCard = document.createElement('div')
    divCard.className = "card"
    divCard.dataset.trainer= trainer.id
    divCard.innerHTML = `<p>Trainer: ${trainer.name}</p><button class="add-button" data-id-btn= ${trainer.id}>Add Pokemon</button><h5>POKEMON TEAM:</h5>`
    mainCollection.appendChild(divCard)
    const ul = document.createElement('ul')
    divCard.appendChild(ul)
    trainer.pokemons.forEach(pokemon => {
      const li = document.createElement('li')
      li.innerHTML = ` <strong>${pokemon.nickname}</strong> (${pokemon.species})<button class="release" data-pokemon-id= ${pokemon.id}>Release</button>`
      ul.appendChild(li)
    })
  })
}

function pokemonTeam(){
  const mainCollection = document.getElementById('main')
  mainCollection.addEventListener('click', function(event){
    if(event.target.className === 'release'){
        pokeID = parseInt(event.target.dataset.pokemonId)
    const formData = {
      trainer: pokeID
    }
    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
      }
      let id = `${pokeID}`
      let url = `http://localhost:3000/pokemons/${id}`
      
      fetch(url, configObj)
    li = event.target.parentNode
    li.remove();
    } 
    if (event.target.className === 'add-button'){
      trainerID = parseInt(event.target.dataset.idBtn)
      const formData = {
        trainer_id: trainerID
      }
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/pokemons", reqObj)
        .then(resp => resp.json())
        .then(pokemon => renderPokemon(pokemon))  
        
        const renderPokemon = (pokemon) => {
          ul = event.target.nextSibling.nextElementSibling
          li = document.createElement('li')
          li.innerHTML = `<strong>${pokemon.nickname}</strong> (${pokemon.species})<button class="release" data-pokemon-id= ${pokemon.id}>Release</button>`
          ul.appendChild(li)
        }
    }
  })
}
