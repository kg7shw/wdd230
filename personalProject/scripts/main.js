const baseURL = "https://kg7shw.github.io/wdd230";
const cardsURL = `${baseURL}/data/infoCards.json`;

const SectionMainDisplay = document.querySelector(".info-card-section");

async function getCards() {
  try {
    const response = await fetch(cardsURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayCards(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCards(data) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "card-list");
  ul.classList.add("card-list");
  ul.classList.add("grid");

  for (let card of data.cards) {
    const li = document.createElement("li");
    li.classList.add("card-list-item");
    const img = document.createElement("img");
    img.setAttribute("src", card.imageUrl);
    img.setAttribute("width", 300);
    li.classList.add("img");
    const h2 = document.createElement("h2");
    h2.setAttribute("src", card.imageUrl);
    h2.setAttribute("width", 300);
    h2.textContent = card.title;
    h2.classList.add("title");
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    const p = document.createElement("p");
    p.classList.add("description");
    p.textContent = card.description;
    const a = document.createElement("a");
    a.textContent = card.websiteUrl;
    a.classList.add("website");
    img.setAttribute("href", card.imageUrl);

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(textWrapper);
    textWrapper.appendChild(p);
    textWrapper.appendChild(a);

    // li.innerHTML = `
    //   <img src="${card.imageUrl}" width="300">
    //   <h2 class="title">${card.title}</h2>
    //   <div class="text-wrapper>
    //   <p class="description">${card.description}</p>
    //   <a class="website" href="${card.websiteUrl}">${card.websiteUrl}</a>
    //   </div>
    // `;

    // <li>
    //   <img />
    //   <h2></h2>
    //   <div></div>
    // </li>

    ul.appendChild(li);
  }

  SectionMainDisplay.appendChild(ul);
}

getCards();
