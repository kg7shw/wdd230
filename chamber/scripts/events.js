const baseURLEvents = "https://kg7shw.github.io/wdd230";
const eventImgURL = `${baseURLEvents}/data/eventImg.json`;
console.log(eventImgURL);

const eventsContainer = document.getElementById("events-container");

async function getEventImages() {
  try {
    const response = await fetch(eventImgURL);
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
  for (let imageUrl of data.images) {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("events");

    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Event Image";
    img.classList.add("event-img");
    img.loading = "lazy";

    const eventText = document.createElement("p");
    eventText.textContent = "Lorem ipsum dolor sit amet";

    picture.appendChild(img);
    eventDiv.appendChild(picture);
    eventDiv.appendChild(eventText);
    eventsContainer.appendChild(eventDiv);
  }
}

getEventImages();
