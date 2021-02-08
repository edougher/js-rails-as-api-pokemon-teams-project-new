const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

//hold all pokemon data from getPokemon() fetch
 let allPokemon = []
// call to execute the getTrainers() fetch
 getTrainers()
 getPokemon()

function getTrainers() {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainerData => {
        //iterate over each trainer and call createCard() for each trainer
        trainerData.forEach(trainer => {
            createCards(trainer)
        });
    })
}
//fetch pokemon data
function getPokemon() {
    fetch(POKEMONS_URL)
    .then(resp => resp.json())
    .then(pokeData => {
        //put all pokeData from the fetch response in a global var(allPokemon) to use later
        allPokemon = pokeData
    })
}

//create the Trainer cards
function createCards(t){
const body = document.querySelector('body')
 const newDiv = document.createElement('div')
 newDiv.className = 'card'

 const pTag = document.createElement('p')
//create ul to hold li's
const ul = document.createElement('ul')
//create li
const li = document.createElement('li')

 pTag.innerText = t.name
 //append pTag to the newDiv
 newDiv.appendChild(pTag)
 //append newDiv to body(that will hold all the divs)
 body.appendChild(newDiv)
 
 //   ###***   TODO iterate through allPokemon and find the ones that have a trainer_id that is equal to t.id
 //find the each pokemon that is associated with this trainer
 //const myPokemon = myPokemon = allPokemon.forEach(pokemon => pokemon.trainer_id).trainer_id)
 console.log(allPokemon)
  

}
