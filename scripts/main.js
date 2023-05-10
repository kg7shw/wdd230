// const hamButton = document.querySelector("#menu");
// const navigation = document.querySelector(".navigation");

// hamButton.addEventListener("click", () => {
//   navigation.classList.toggle("open");
//   hamButton.classList.toggle("open");
// });

const hamMenuButton = document.querySelector("#menu-toggle");
const navContents = document.querySelector(".nav > .contents");

hamMenuButton.addEventListener("click", () => {
  hamMenuButton.classList.toggle("active");
  navContents.classList.toggle("active");
  hamMenuButton.querySelectorAll(".icon").forEach((item) => {
    item.classList.toggle("active");
  });
});
