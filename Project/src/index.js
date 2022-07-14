function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthIndex = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[dayIndex];
  let month = months[monthIndex];
  let number = date.getDate();
  let year = date.getFullYear();
  return `${day}, ${month}  ${number} ${year} ${hours}:${minutes}`;
}
let dateElement = document.querySelector(".date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function displayWeatherCondition(response) {
  document.querySelector("#cityName").innerHTML = response.data.name.country;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidityPercentage").innerHTML =
    response.data.main.humidity;
  document.querySelector("#windValue").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather").innerHTML = response.data.weather[0].main;
}

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#cityInput");
  let cityName = document.querySelector("#cityName");

  let apiKey = "cd275db7d3e7aa468e7c3d14459e6cdc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  console.log(axios.get(apiUrl));
  //axios.get(apiUrl).then(displayWeatherCondition);

  cityName.innerHTML = cityInput.value;
}

//тут мы нашли кнопку и подписали ее на выполенние функции
let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", searchCity);
