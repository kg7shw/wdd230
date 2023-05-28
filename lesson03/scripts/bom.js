const input = document.querySelector("#favchap");
const button = document.querySelector("#main_button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

function displayList(item) {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChpterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChpterList();
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChpterList();
    input.value = "";
    input.focus();
  }
});
