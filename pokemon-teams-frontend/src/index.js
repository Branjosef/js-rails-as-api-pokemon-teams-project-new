const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main(){
  fetchTrainers()
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
    divCard.innerHTML = `<p>Trainer: ${trainer.name}</p><button data-id-btn= ${trainer.id}>Add Pokemon</button><h5>POKEMON TEAM:</h5>`
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

