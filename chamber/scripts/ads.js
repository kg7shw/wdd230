const baseURLAds = "https://kg7shw.github.io/wdd230";
const adsURL = `${baseURLAds}/data/members.json`;
console.log(adsURL);

async function getAds() {
  try {
    const response = await fetch(adsURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const spotlightMembers = getRandomSpotlightMembers(data);
      displayAdImages(spotlightMembers);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function getRandomSpotlightMembers(data) {
  const qualifiedMembers = data.members.filter(
    (member) =>
      member.membership_level === "Silver" || member.membership_level === "Gold"
  );
  const spotlightMembers = [];
  const numMembersToDisplay = 2; // Randomly select 2 members

  for (let i = 0; i < numMembersToDisplay; i++) {
    const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
    spotlightMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
  }

  return spotlightMembers;
}

function displayAdImages(data) {
  const adsCards = document.querySelector(".ads-cards");

  for (let ad of data) {
    const divAds = document.createElement("div");
    divAds.classList.add("ads");
    divAds.innerHTML = `
      <a class="website" href="${ad.website}">
        <img src="${ad.image}" height="50" alt="${ad.name}" class="ad-img" loading="lazy">
      </a>
      <p class="ad-name">${ad.name}</p>
      <p class="description">${ad.description}</p>
    `;

    adsCards.appendChild(divAds);
  }
}

getAds();
