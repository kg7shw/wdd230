function getLastVisted() {
  let lastVistedDate = localStorage.getItem("lastVisitedDate");
  const currentDate = new Date();

  if (lastVistedDate) {
    const dateLastVisited = Date.now(JSON.parse(lastVistedDate));

    const timeSinceLastVisit =
      currentDate.getTime() - dateLastVisited.getTime();
    const daysSinceLastVisit = (timeSinceLastVisit = 1000 * 60 * 60 * 24);

    const spanLastVisited = document.querySelector("#lastVisited");
    spanLastVisited.textContent = daysSinceLastVisit;
  } else {
    lastVisted = JSON.stringify(Date.now());

    localStorage.setItem("lastVisitedDate", lastVisted);
  }
}

getLastVisted();
