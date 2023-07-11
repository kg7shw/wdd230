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
  const eventsCards = document.querySelector(".events-cards");

  for (let eventimage of data.images) {
    const divEvents = document.createElement("div");
    divEvents.classList.add("events");
    divEvents.innerHTML = `
        <img src="${data.images}" width="50">
        <h2 class="name">${member.name}</h2>
        <p class="address">${member.address}</p>
        <p class="phone">${member.phone}</p>
        <a class="website" href="${member.website}">${member.website}</a>
      `;

    eventsCards.appendChild(div);
  }

  articleMainDisplay.appendChild(ul);

  const gridButton = document.querySelector("#grid");
  const listButton = document.querySelector("#list");
  const memberList = document.querySelector("#member-list");

  if (memberList) {
    gridButton.addEventListener("click", () => {
      memberList.classList.add("grid");
      memberList.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
      memberList.classList.add("list");
      memberList.classList.remove("grid");
    });
  } else {
    console.log("Error: member-list element not found");
  }

  function showList() {
    const menu = document.getElementById("menu");
    const list = document.getElementById("list");

    if (menu && list) {
      menu.classList.add("active");
      list.classList.remove("hidden");
    }
  }

  function hideList() {
    const menu = document.getElementById("menu");
    const list = document.getElementById("list");

    if (menu && list) {
      menu.classList.remove("active");
      list.classList.add("hidden");
    }
  }

  const menuButton = document.getElementById("menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const list = document.getElementById("list");
      if (list && list.classList.contains("hidden")) {
        showList();
      } else {
        hideList();
      }
    });
  }
}

getMembers();
