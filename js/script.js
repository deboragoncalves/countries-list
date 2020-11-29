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
  
}

function getAllCounts() {
  
}

function clickButtons() {
  
}