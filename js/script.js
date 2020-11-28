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

      console.log(data[1]);
      console.log(data[2]);
      console.log(data[3]);

    }).catch(error => console.log(error));
  }).catch(error => console.log(error));

}