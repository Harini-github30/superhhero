// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroImageDiv = document.getElementById('heroImage')
const random = document.getElementById('newHeroButton')
const search = document.getElementById('searchButton')
// 

const generateRandom = () => {
  return Math.floor(Math.random()*731)+1
}

const showSuperHero = (json) =>{
  heroImageDiv.innerHTML = `<h2>${json.name}</h2>`
  heroImageDiv.innerHTML += `<img src=${json.image.url} height=200 width=200/>`
}

const getRandomSuperHero = (randomNumber) =>{
  fetch(`${BASE_URL}/${randomNumber}`)
    .then(response => response.json())
    .then(json =>{
      showSuperHero(json)
      console.log(json)
    })
  
}

const getSuperHeroBySearch = (name) =>{
  //console.log(name)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
      //showSuperHero(json)
      showSuperHero(json.results[0])
      //console.log(json.image.url)
    })  
}


random.onclick = () => {
  const randomNumber = generateRandom()
  getRandomSuperHero(randomNumber)
}

search.onclick = () =>{
  const Input = document.getElementById('searchInput')
  if(Input.value==""){
    alert("Please enter a name !")
  }
  else{
    console.log(Input.value)
    getSuperHeroBySearch(Input.value)
  }
}