const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.75&lon=6.64&appid=17f9ad6c31f529f1ee759cfe8b2014d0";

function displayResults(data) {
  currentTemp.innerHTML = `${data.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather.icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute(url);
  weatherIcon.setAttribute("alt", "test");
  captionDesc.textContent = `${desc}`;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //   displayData(data);
      //   displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
