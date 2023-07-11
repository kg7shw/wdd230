fetch("images.json")
  .then((response) => response.json())
  .then((data) => {
    const eventsContainer = document.getElementById("events-container");
    data.images.forEach((imageUrl) => {
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
    });
  })
  .catch((error) => console.error(error));
