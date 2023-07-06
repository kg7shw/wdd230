const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const lat = "43.82";
const lon = "-111.79";
const apiKey = "ce57d3e509bb08e5388443da788e875f";
const GMurl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.75&lon=6.64&appid=17f9ad6c31f529f1ee759cfe8b2014d0";
const rxUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.82&lon=-111.79&appid=17f9ad6c31f529f1ee759cfe8b2014d0";
const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}`;
const currentWeatherDataUrl1 =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&16.044&120.332&appid=ce57d3e509bb08e5388443da788e875f";

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "test");
  captionDesc.textContent = `${desc}`;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      //   displayData(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
