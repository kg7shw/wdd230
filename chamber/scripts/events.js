const baseURLEvents = "https://kg7shw.github.io/wdd230";
const eventsURL = `${baseURLEvents}/data/events.json`;
console.log(eventsURL);

const eventsContainer = document.getElementById("events-container");

async function getEvents() {
  try {
    const response = await fetch(eventsURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayEventImages(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayEventImages(data) {
  const eventsCards = document.querySelector(".events-cards");

  for (let event of data.events) {
    const divEvents = document.createElement("div");
    divEvents.classList.add("events");
    divEvents.innerHTML = `

        <a class="website" href="${event.website}"><img src="${event.image}" height="250" alt="${event.name}" class="event-img" loading="lazy"></a>
        <p class="address">${event.description}</p>

      `;

    eventsCards.appendChild(divEvents);
  }
}

getEvents();
