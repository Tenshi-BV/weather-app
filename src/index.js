import "./style.css";
import { getWeather } from "./fetch-weather";
import { locationForm } from "./location-form";
import { showWeather } from "./show-weather";
import { header } from "./header.js";

// CALL BY CITY NAME
// api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
// API KEY
// 33eaa4fb488a76dcd98c62d852f4131f
// TRY THIS: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f
// npm run build

(function () {
  let location;
  let currentWeather;

  async function getCurrentWeather(location) {
    currentWeather = await getWeather(location);
    if (Array.isArray(currentWeather)) {
      if (currentWeather[0] === 404) {
        console.log(currentWeather);
        alert("404, location not found");
      } else {
        console.log(currentWeather);
        alert("unknown error");
      }
    } else {
      showWeather(currentWeather);
    }
  }

  function buttonClick() {
    location = document.getElementById("location").value;
    if (location.length === 0) {
      return;
    }
    getCurrentWeather(location);
  }

  header();
  locationForm();

  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    buttonClick();
  });
})();
