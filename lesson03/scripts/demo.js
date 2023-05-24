const btnSave = document.querySelector("button");
const input = document.querySelector("firstName");

btnSave.addEventListener("click", () => {
  const firstName = input.value;

  localStorage.setItem("fisrtName", firstName);

  //
  console.log(firstName);

  const h1 = document.querySelector('h1');


  if (localStorage.getItem('firsteName') != '') {
    h1.textContent = `welcome, ${localStorage.getItem('firstName)}`;

    input.value = localStorage.getItem('firstName);
  }
});
