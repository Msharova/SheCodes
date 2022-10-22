//day and time values

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let mainDay = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

//adding 0 if hours/minutes value is lower that 10

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${hours}`;
}

//changing current day and time

let currentDay = document.querySelector("#mainDay");
currentDay.innerHTML = `${mainDay}, `;

let currentTime = document.querySelector("#mainTime");
currentTime.innerHTML = `${hours}:${minutes}`;

// celsius and fahrenheit links

function CtoF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function celciusFunction() {
  let currentCelcius = document.querySelector("#current-temperature");
  currentCelcius.innerHTML = 15;
}

function fahrenheitFunction() {
  let currentCelcius = document.querySelector("#current-temperature");
  currentCelcius.innerHTML = CtoF(15);
}

let celsiusLink = document.querySelector("#celcius-link");
celsiusLink.addEventListener("click", celciusFunction);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheitFunction);

//changing submited city and it's temperature based on API data

function newCityData(response) {
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  ); // takes temperature value from the API data and puts in the #current-temperature
  document.querySelector(".cityName").innerHTML = response.data.name; //takes city name from the API data and puts in the .cityName
  document.querySelector("#humidity").innerHTML = response.data.main.humidity; //takes city's humidity and puts in the #humidity
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  ); // takes wind speed of the city and puts it in the #wind
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main; //takes description of the city data and puts it in #description
}

function search(cityToUrl) {
  let apiUrlCity = `${apiEndpoint}q=${cityToUrl}&appid=${apiKey}&units=${unit}`; //city API link
  axios.get(apiUrlCity).then(newCityData);
}

function handleCitySubmit(event) {
  event.preventDefault();
  let cityToUrl = document.querySelector(".searchEngine").value; //takes value from search engine input and puts it in cityToUrl
  search(cityToUrl);
}

let searchEngine = document.querySelector(".location-elements");
searchEngine.addEventListener("submit", handleCitySubmit);

// searching for your current location (button)

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrlLocal = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrlLocal).then(newCityData);
}

function getYourLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition); //goes to the same function as city search
}

let locationButton = document.querySelector("#location-button"); // selects your location button in html
locationButton.addEventListener("click", getYourLocation); // action on click

// adding API connection for weather

let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
let unit = `metric`;

search("Seattle"); // shows random city (in this case it's Seattle) on page load
