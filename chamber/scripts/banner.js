const body = document.querySelector("#body");
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.setAttribute("id", "banner");

  const message = document.createElement("span");
  message.classList.add("banner-message"); // Add a class for styling
  message.textContent =
    "Join us at the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.";
  banner.appendChild(message);

  const closeButton = document.createElement("button");
  closeButton.classList.add("banner-close"); // Add a class for styling
  closeButton.textContent = "❌";
  closeButton.addEventListener("click", () => {
    banner.remove();
  });
  banner.appendChild(closeButton);

  body.prepend(banner);
}

// const body = document.querySelector("#body");
// const currentDate = new Date();
// const currentDay = currentDate.getDay();

// if (currentDay >= 1 && currentDay <= 3) {
//   const banner = document.createElement("span");
//   banner.classList.add("banner");
//   banner.setAttribute("id", "banner");
//   banner.textContent =
//     "Join us at the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.";

//   //   const closeBtn = document.createElement
//   body.prepend(banner);
// }
