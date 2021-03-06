const showWeather = (weather) => {
  function calcSunrise() {
    let timeH = weather.sunrise.getHours();
    if (timeH < 9) {
      timeH = "0" + timeH;
    }
    let timeM = weather.sunrise.getMinutes();
    if (timeM < 9) {
      timeM = "0" + timeM;
    }
    const time = `${timeH}:${timeM}`;
    return time;
  }

  function calcSunset() {
    let timeH = weather.sunset.getHours();
    if (timeH < 9) {
      timeH = "0" + timeH;
    }
    let timeM = weather.sunset.getMinutes();
    if (timeM < 9) {
      timeM = "0" + timeM;
    }
    const time = `${timeH}:${timeM}`;
    return time;
  }

  function temperatureColor() {
    const temp = weather.temp;
    if (temp < 0) {
      tempColor = "ice";
    } else if (temp < 30) {
      tempColor = "moderate";
    } else {
      tempColor = "red";
    }
  }

  const humi1 = 100 - weather.humidity + "%";

  const sunrise = calcSunrise();
  const sunset = calcSunset();

  let tempColor;
  temperatureColor();

  const deg1 = weather.deg + "deg";

  const clo1 = weather.clouds * 0.01;
  console.log(clo1);

  const body = document.querySelector("body");

  const oldContainer = document.querySelector("#weatherContainer");
  if (oldContainer !== null) {
    oldContainer.remove();
  }

  const container = document.createElement("div");
  container.setAttribute("id", "weatherContainer");
  body.appendChild(container);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.innerHTML = `<h2>${weather.name}</h2><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="icon for ${weather.main}"><p>${weather.main}</p>`;
  container.appendChild(main);

  const temp = document.createElement("div");
  temp.setAttribute("id", "temp");
  temp.classList.add("widget", tempColor);
  temp.innerHTML = `<p>Temperature: ${weather.temp}°C</p><p>Feels like: ${weather.feels_like}°C</p>`;
  container.appendChild(temp);

  const humi = document.createElement("div");
  humi.setAttribute("id", "humi");
  humi.classList.add("widget");
  humi.innerHTML = `<p>Humidity: ${weather.humidity}%</p>`;
  container.appendChild(humi);
  humi.style.setProperty("--per", humi1);

  const wind = document.createElement("div");
  wind.setAttribute("id", "wind");
  wind.classList.add("widget");
  wind.innerHTML = `<div id="compassdiv"><p id="compass">⇧</p><p id="degpar">(${
    weather.deg
  }°)</p></div><p>Wind speed: ${weather.speed.toFixed(1)} m/s (${(
    weather.speed / 3.6
  ).toFixed(1)} km/h)</p><p>Gust speed: ${weather.gust.toFixed(1)} m/s (${(
    weather.gust / 3.6
  ).toFixed(1)} km/h)</p>`;
  container.appendChild(wind);
  wind.style.setProperty("--deg", deg1);

  const cloud = document.createElement("div");
  cloud.setAttribute("id", "cloud");
  cloud.classList.add("widget");
  cloud.innerHTML = `<p>Cloudiness: ${weather.clouds}%</p>`;
  container.appendChild(cloud);
  cloud.style.setProperty("--clo", clo1);

  const sun = document.createElement("div");
  sun.setAttribute("id", "sun");
  sun.classList.add("widget");
  sun.innerHTML = `<p>Sunrise: ${sunrise}</p><p>Sunset: ${sunset}</p>`;
  container.appendChild(sun);
};

export { showWeather };
