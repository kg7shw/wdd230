// Hamburger menu Button

const hamMenuButton = document.querySelector("#menu-toggle");
const navContents = document.querySelector(".nav > .contents");

hamMenuButton.addEventListener("click", () => {
  navContents.classList.toggle("active");
  hamMenuButton.querySelectorAll(".icon").forEach((item) => {
    item.classList.toggle("active");
  });
});
