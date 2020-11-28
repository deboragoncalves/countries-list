function start() {
  getAllCountries();
} 

start();

function getAllCountries() {
  const url = "http://restcountries.eu/rest/v2/all";

  fetch(url).then(response => {

    response.json().then(data => {
      console.log(data);
    }).catch(error => console.log(error));
  }).catch(error => console.log(error));

}