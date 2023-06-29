const baseURL = "https://kg7shw.github.io/wdd230";
const membersURL = `${baseURL}/data/members.json`;

const articleMainDisplay = document.querySelector(".directory-article");

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "member-list");
  ul.classList.add("member-list");
  ul.classList.add("grid");

  for (let member of data.members) {
    const li = document.createElement("li");
    li.classList.add("member-list-item");
    li.innerHTML = `
      <img src="${member.image}" width="50">
      <h2 class="name">${member.name}</h2>
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <a class="website" href="${member.website}">${member.website}</a>
    `;

    ul.appendChild(li);
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
