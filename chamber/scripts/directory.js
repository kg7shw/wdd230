const baseURL = "https://kg7shw.github.io/wdd230";
const membersURL = "https://kg7shw.github.io/wdd230/data/members.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

function displayMembers(data) {
  const article = document.querySelector(".directory-article");

  data.members.forEach((member) => {
    const section = document.createElement("section");
  });
}

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //   displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getMembers();
