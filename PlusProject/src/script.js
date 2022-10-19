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
let hour = now.getHours();
let minutes = now.getMinutes();

let currentDay = document.querySelector("#mainDay");
currentDay.innerHTML = `${mainDay}, `;

let currentTime = document.querySelector("#mainTime");
currentTime.innerHTML = `${hour}:${minutes}`;

//changing submited city

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".searchEngine");
  let currentCity = document.querySelector(".cityName");
  currentCity.innerHTML = cityInput.value;
}

let searchEngine = document.querySelector(".location-elements");
searchEngine.addEventListener("submit", citySearch);

// celsius and fahrenheit buttons

function CtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celciusFunction() {
  let currentCelcius = document.querySelector("#currentTemperature");
  currentCelcius.innerHTML = 15;
}

function fahrenheitFunction() {
  let currentCelcius = document.querySelector("#currentTemperature");
  currentCelcius.innerHTML = CtoF(15);
}

let celsiusLink = document.querySelector("#celcius-link");
celsiusLink.addEventListener("click", celciusFunction);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheitFunction);
