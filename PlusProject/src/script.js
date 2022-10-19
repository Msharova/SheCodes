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
