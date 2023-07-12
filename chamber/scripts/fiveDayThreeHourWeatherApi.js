const lat = "16.042";
const lon = "120.33";
const units = "metric";
// const apiKey = "17f9ad6c31f529f1ee759cfe8b2014d0";
// const fiveDayThreeHourForecast = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${lat}&lon=${lon}&appid=${apiKey}`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector(".condition");

function displayResults(data) {
  currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

function displayMembers(data) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "weather-list");
  ul.classList.add("weather-list");
  ul.classList.add("flex");

  const dailyForecasts = {};

  for (let item of data.list) {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    if (!dailyForecasts[day]) {
      dailyForecasts[day] = {
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        icon: item.weather[0].icon,
      };
    } else {
      const currentDay = dailyForecasts[day];
      if (item.main.temp_min < currentDay.minTemp) {
        currentDay.minTemp = item.main.temp_min;
      }
      if (item.main.temp_max > currentDay.maxTemp) {
        currentDay.maxTemp = item.main.temp_max;
      }
    }
  }

  for (let day in dailyForecasts) {
    const forecast = dailyForecasts[day];

    const li = document.createElement("li");
    li.classList.add("icons");

    const img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${forecast.icon}.png`;
    img.classList.add("weather");
    img.alt = day;

    const h2 = document.createElement("h2");
    h2.classList.add("name");
    h2.textContent = day;

    const p1 = document.createElement("p");
    p1.classList.add("minValues");
    p1.textContent = `${forecast.minTemp}°C - `;

    const p2 = document.createElement("p");
    p2.classList.add("maxValues");
    p2.textContent = `${forecast.maxTemp}°C`;

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p1);
    li.appendChild(p2);

    ul.appendChild(li);
  }

  const article = document.querySelector(".five-day-weather-forcast");
  article.innerHTML = "";
  article.appendChild(ul);
}

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      displayResults(data);
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(fiveDayThreeHourForecast);

// const lat = "16.042";
// const lon = "120.33";
// const units = "metric";
// const apiKey = "17f9ad6c31f529f1ee759cfe8b2014d0";
// const fiveDayThreeHourForecast = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&lat=${lat}&lon=${lon}&appid=${apiKey}`;

// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector(".condition");

// function displayResults(data) {
//   currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;
//   const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
//   let desc = data.list[0].weather[0].description;
//   weatherIcon.setAttribute("src", iconsrc);
//   weatherIcon.setAttribute("alt", desc);
//   captionDesc.textContent = desc;
// }

// function displayMembers(data) {
//   const article = document.querySelector(".five-day-weather-forcast");
//   const dailyForecasts = {};

//   for (let item of data.list) {
//     const date = new Date(item.dt * 1000);
//     const day = date.toLocaleDateString("en-US", { weekday: "long" });

//     if (!dailyForecasts[day]) {
//       dailyForecasts[day] = {
//         minTemp: item.main.temp_min,
//         maxTemp: item.main.temp_max,
//         icon: item.weather[0].icon,
//       };
//     } else {
//       const currentDay = dailyForecasts[day];
//       if (item.main.temp_min < currentDay.minTemp) {
//         currentDay.minTemp = item.main.temp_min;
//       }
//       if (item.main.temp_max > currentDay.maxTemp) {
//         currentDay.maxTemp = item.main.temp_max;
//       }
//     }
//   }

//   for (let day in dailyForecasts) {
//     const forecast = dailyForecasts[day];

//     const div = document.createElement("div");
//     div.classList.add("icons");

//     const img = document.createElement("img");
//     img.src = `https://openweathermap.org/img/wn/${forecast.icon}.png`;
//     img.classList.add("weather");
//     img.alt = day;

//     const h2 = document.createElement("h2");
//     h2.classList.add("name");
//     h2.textContent = day;

//     const p1 = document.createElement("p");
//     p1.classList.add("minValues");
//     p1.textContent = `${forecast.minTemp}°C`;

//     const p2 = document.createElement("p");
//     p2.classList.add("maxValues");
//     p2.textContent = `${forecast.maxTemp}°C`;

//     div.appendChild(img);
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);

//     article.appendChild(div);
//   }
// }

// async function apiFetch(url) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);

//       displayResults(data);
//       displayMembers(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiFetch(fiveDayThreeHourForecast);

// // const timestamp = 1688666400;
// // const date = new Date(timestamp * 1000);

// // // Specify the options for formatting
// // const options = {
// //   weekday: "long",
// //   //   year: "numeric",
// //   //   month: "long",
// //   //   day: "numeric",
// // };

// // // Formatting the date as a string with the day of the week
// // const formattedDateTime = date.toLocaleDateString("en-US", options);

// // console.log(formattedDateTime);

// // // const currentTemp = document.querySelector("#current-temp");
// // // const weatherIcon = document.querySelector("#weather-icon");
// // // const captionDesc = document.querySelector("figcaption");
// // // const lat = "43.82";
// // // const lon = "-111.79";

// // const lat = "16.042";
// // const lon = "120.33";
// // const units = "metric";
// // const apiKey = "17f9ad6c31f529f1ee759cfe8b2014d0";

// // console.log(currentWeatherDataUrl);

// // const fiveDayThreeHourForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// // console.log(fiveDayThreeHourForecast);

// // function displayResults(data) {
// //   currentTemp.innerHTML = `${data.main.temp}&deg;C`;
// //   const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
// //   let desc = data.weather[0].description;
// //   weatherIcon.setAttribute("src", iconsrc);
// //   weatherIcon.setAttribute("alt", "test");
// //   captionDesc.textContent = `${desc}`;
// // }

// // async function apiFetch(url) {
// //   try {
// //     const response = await fetch(url);
// //     if (response.ok) {
// //       const data = await response.json();
// //       console.log(data);

// //       displayResults(data);
// //     } else {
// //       throw Error(await response.text());
// //     }
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // apiFetch(fiveDayThreeHourForecast);

// // function displayMembers(data) {
// //   const ul = document.createElement("ul");
// //   ul.setAttribute("id", "member-list");
// //   ul.classList.add("member-list");
// //   ul.classList.add("flex");

// //   for (let dayOfTheWeek of data.list) {
// //     const li = document.createElement("li");
// //     li.classList.add("member-list-item");
// //     li.innerHTML = `
// //         <img src="${weather.icon}" width="50">
// //         <h2 class="name">${dt}</h2>
// //         <p class="minValues" id="day1Min">${main.temp_min}</p>
// //         <p class="maxValues" id="day1Max">${main.temp_max}</p>

// //         `;

// //     ul.appendChild(li);
// //   }
// // }
