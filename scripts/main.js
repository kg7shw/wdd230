// const hamButton = document.querySelector("#menu");
// const navigation = document.querySelector(".navigation");

// hamButton.addEventListener("click", () => {
//   navigation.classList.toggle("open");
//   hamButton.classList.toggle("open");
// });

const hamMenuButton = document.querySelector("#ham-menu");
const nav = document.querySelector(".nav");

hamMenuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamMenuButton.classList.toggle("open");
});
