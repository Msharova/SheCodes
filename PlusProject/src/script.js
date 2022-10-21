//changing current day and time

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

let currentDay = document.querySelector("#mainDay");
currentDay.innerHTML = `${mainDay}, `;

let currentTime = document.querySelector("#mainTime");
currentTime.innerHTML = `${hours}:${minutes}`;

//changing submited city

function newCityTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityCelsius = document.querySelector("#current-temperature");
  cityCelsius.innerHTML = temperature;
}

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".searchEngine");
  let currentCity = document.querySelector(".cityName");

  currentCity.innerHTML = cityInput.value;

  let cityToUrl = cityInput.value;

  let apiUrlCity = `${apiEndpoint}q=${cityToUrl}&appid=${apiKey}&units=${unit}`;

  console.log(cityToUrl);
  console.log(apiUrlCity);

  axios.get(apiUrlCity).then(newCityTemp);
}

let searchEngine = document.querySelector(".location-elements");
searchEngine.addEventListener("submit", citySearch);

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

// adding API connection for weather

function ShowTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = temperature;

  let currentCity = document.querySelector(".cityName");
  currentCity.innerHTML = response.data.name;
}

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiUrlLocal = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrlLocal).then(ShowTemperature);
}

navigator.geolocation.getCurrentPosition(handlePosition);
let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
let unit = `metric`;
