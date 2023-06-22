const baseURL = "https://kg7shw.github.io/wdd230";
const membersURL = "https://kg7shw.github.io/wdd230/data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      //   displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getMembers();
