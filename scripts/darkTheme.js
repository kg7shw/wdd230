// Theme button
const themeBtn = document.querySelector("#theme-toggle");
themeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-theme");
  themeBtn.querySelectorAll(".icon").forEach((item) => {
    item.classList.toggle("active");
  });
});
