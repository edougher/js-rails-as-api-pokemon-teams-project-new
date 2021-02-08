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
const main = document.querySelector('main')
const newDiv = document.createElement('div')
newDiv.className = 'card'
newDiv.setAttribute("data-id", t.id)

const button = document.createElement('button')
button.setAttribute("data-trainer-id", t.id)
button.innerHTML = "Add Pokemon"
newDiv.appendChild(button)
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


 allPokemon.forEach(pokemon => {
    if (pokemon.trainer_id === t.id)
    li.innerHTML = pokemon.nickname
    ul.appendChild(li)
    newDiv.appendChild(ul)
});

}