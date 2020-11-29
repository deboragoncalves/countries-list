let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavoriteCountries = 0;

let allPopulationList = 0;
let allFavoritePopulationList = 0;

// Elementos HTML

let numberAllCountries = document.querySelector('.number-total-countries');
let numberAllFavoriteCountries = document.querySelector('.number-favorite-countries');

let populationAllCountries = document.querySelector('.population-total-countries');
let populationFavoriteCountries = document.querySelector('.population-favorite-countries');

let listCountries = document.querySelector('.list-all-countries');
let listFavoriteCountries = document.querySelector('.list-favorite-countries'); 

function start() {
  getAllCountries();
} 

start();

function getAllCountries() {
  const url = "http://restcountries.eu/rest/v2/all";

  fetch(url).then(response => {

    const json = response.json().then(data => {

      // Map no json para montar um novo objeto com id, nome, população, imagem

      // TO DO: Destructing: melhorar escrita. country é comum em todos os itens
      // TO DO: aysnc/await

      allCountries = data.map(country => {
        return {
          id: country.numericCode,
          name: country.translations.br,
          population: country.population,
          flag: country.flag
        }
      });

      console.log(allCountries)

      populateData();

    }).catch(error => console.log(error));
  }).catch(error => console.log(error));

}

function populateData() {
  populateListAllCountries();
  populateListFavoriteCountries();

  // Quantidade de população e países

  getAllCounts();
  clickButtons();
}

function populateListAllCountries() {

  let countriesHTML = "" 

  // For each - all countries

  allCountries.forEach(country => {

    // TO DO: Destructing

    // Criar elementos: button, dados (bandeira, nome, população)

    // Criar div container para estilizar posteriormente

    // Id button = id elemento

    const dataListHTML = `
      <div class="container-data">
        <div><button id="${country.id}" class='button-add'>+</button></div>
        <div class='image-country'><img src="${country.flag}" alt="${country.name}"></div>
        <div class='list'>
        <ul>
          <li>${country.name}</li>
          <li>${country.population}</li>
        </ul>
        </div>
      </div>`

    // Receber todas as divs criadas

    countriesHTML += dataListHTML;

    })

    // Mostrar dados no HTML

    listCountries.innerHTML = countriesHTML;

}

function populateListFavoriteCountries() {

  let favoritesHTML = "" 

  favoriteCountries.forEach(favoriteCountry => {

    const dataListHTML = `
      <div class="container-data">
        <div><button id="${favoriteCountry.id}" class='button-remove'>-</button></div>
        <div class='image-country'><img src="${favoriteCountry.flag}" alt="${favoriteCountry.name}"></div>
        <div class='list'>
        <ul>
          <li>${favoriteCountry.name}</li>
          <li>${favoriteCountry.population}</li>
        </ul>
        </div>
      </div>`

    // Receber todas as divs criadas

    favoritesHTML += dataListHTML;

  })

  listFavoriteCountries.innerHTML = favoritesHTML

  
}

function getAllCounts() {
  numberAllCountries.textContent = allCountries.length
  numberAllFavoriteCountries.textContent = favoriteCountries.length

  // Reduce: somatório. Callback com 2 params: variável somatorio e objeto atual. Valor inicial: 0

  const totalPopulation= allCountries.reduce((totalSum, current) => {
    return totalSum + current.population;
  }, 0);

  populationAllCountries.textContent = totalPopulation;

  const totalFavorites = favoriteCountries.reduce((totalSum, current) => {
    return totalSum + current.population;
  }, 0);

  populationFavoriteCountries.textContent = totalFavorites;

}

function clickButtons() {

  // Array com todos os botões

  const contriesButtons = Array.from(listCountries.querySelectorAll('.button-add'))
  const favoriteButtons = Array.from(listFavoriteCountries.querySelectorAll('.button-remove'))

  // For each: detectar click, chamar função passando id.

  contriesButtons.forEach(button => {

    button.addEventListener('click', () => addToFavorites(button.id))
  })

  favoriteButtons.forEach(button => {

    button.addEventListener('click', () => removeFromFavorites(button.id))
  })

}

function addToFavorites(id) {

 // Pegar pais e incluir na lista de favoritos (spread)

 // Find: traz o elemento (objeto), cujo id é igual ao id do botão clicado

 const newCountry = allCountries.find(country => country.id === id);

 favoriteCountries = [...favoriteCountries, newCountry]

 // Ordem alfabética

 favoriteCountries.sort((a, b) => {
   return a.name.localeCompare(b.name);
 })

 // Remover da lista original: filter. Compara os ids, se for diferente do id atual, mantém.

 allCountries = allCountries.filter(country => country.id !== id)

 // Popular listas

 populateData();
}

function removeFromFavorites(id) {

    // Pegar pais, adicionar na lista de paises e excluir dos favoritos

    const deleteCountry = favoriteCountries.find(country => country.id === id);

    allCountries = [...allCountries, deleteCountry]
    
    allCountries.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    
    favoriteCountries = favoriteCountries.filter(country => country.id !== id)
    
    populateData();

}

// TO DO: formatar numeros