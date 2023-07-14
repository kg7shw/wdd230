const lastVisit = localStorage.getItem("lastVisit");
const currDate = new Date();

if (!lastVisit) {
  // First visit: Display the welcome message
  document.getElementById("page-visits").textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the time difference between visits
  const previousDate = new Date(lastVisit);
  const timeDifference = currDate.getTime() - previousDate.getTime();
  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    // Less than a day since the last visit
    document.getElementById("page-visits").textContent =
      "Back so soon! Awesome!";
  } else {
    // Display the number of days since the last visit
    const message =
      "You last visited " +
      daysDifference +
      " " +
      (daysDifference === 1 ? "day" : "days") +
      " ago.";
    document.getElementById("page-visits").textContent = message;
  }
}

localStorage.setItem("lastVisit", currDate);
