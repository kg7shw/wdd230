const baseURL = "https://kg7shw.github.io/wdd230";
const linksURL = "https://kg7shw.github.io/wdd230/data/links.json";

function displayLinks(data) {
  const list = document.querySelector(".list");

  data.lessons.forEach((lesson) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const lessonText = document.createElement("span");
    lessonText.classList.add("sub_text");
    lessonText.textContent = lesson.lesson + ": ";
    listItem.appendChild(lessonText);

    lesson.links.forEach((link, index) => {
      const linkItem = document.createElement("a");
      linkItem.classList.add("sub_link");
      linkItem.href = link.url;
      linkItem.textContent = link.title;
      listItem.appendChild(linkItem);

      if (index !== lesson.links.length - 1) {
        const divider = document.createElement("span");
        divider.classList.add("divider");
        divider.textContent = " | ";
        listItem.appendChild(divider);
      }
    });

    list.appendChild(listItem);
  });
}

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayLinks(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getLinks();
