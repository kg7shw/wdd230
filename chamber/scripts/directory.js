const baseURL = "https://kg7shw.github.io/wdd230";
const membersURL = "https://kg7shw.github.io/wdd230/data/members.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

const articleMainDisplay = document.querySelector(".directory-article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

// gridbutton.addEventListener("click", () => {
//   // example using arrow function
//   display.classList.add("grid");
//   display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//   display.classList.add("list");
//   display.classList.remove("grid");
// }

// function displayMembers(data) {
//   const article = document.querySelector(".directory-article");

//   data.members.forEach((member) => {
//     const section = document.createElement("section");
//     const img = document.createElement("img");
//     const h3 = document.createElement("h3");
//     const p = document.createElement("p");
//   });
// }

function displayMembers(data) {
  console.log(data);
  const ul = document.createElement("ul");
  ul.classList.add("member-list");

  for (let member in data.members) {
    console.log(member);
    console.log(data[member]);
    const li = document.createElement("li");
    li.classList.add("member-list-item");
    li.innerHTML = `
    <img src="${data.members[member].image}" height="50">
    <h3 class="name">${data.members[member].name}</h3>
    <p class="address">${data.members[member].address}</p>
    <p class="phone">${data.members[member].phone}</p>
    <p class="website">${data.members[member].website}</p>

    `;

    ul.appendChild(li);
  }

  articleMainDisplay.appendChild(ul);
}

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

getMembers();
