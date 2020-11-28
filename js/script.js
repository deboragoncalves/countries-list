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