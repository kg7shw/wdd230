// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("figcaption");
// // const lat = "43.82";
// // const lon = "-111.79";

// const lat = "16.042";
// const lon = "120.33";
// const units = "metric";
// const apiKey = "17f9ad6c31f529f1ee759cfe8b2014d0";

// // const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=43.82&lon=-111.79&appid=17f9ad6c31f529f1ee759cfe8b2014d0";
// const currentWeatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?units=${units}&lat=${lat}&lon=${lon}&appid=${apiKey}`;
// // console.log(url);
// console.log(currentWeatherDataUrl);

// const fiveDayThreeHourForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// console.log(fiveDayThreeHourForecast);

// function displayResults(data) {
//   currentTemp.innerHTML = `${data.main.temp}&deg;C`;
//   const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//   let desc = data.weather[0].description;
//   weatherIcon.setAttribute("src", iconsrc);
//   weatherIcon.setAttribute("alt", "test");
//   captionDesc.textContent = `${desc}`;
// }

// async function apiFetch(url) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);

//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // apiFetch(currentWeatherDataUrl);
// // apiFetch(fiveDayThreeHourForecast);
