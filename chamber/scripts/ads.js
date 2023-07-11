const baseURL = "https://kg7shw.github.io/wdd230";
const membersURL = `${baseURL}/data/members.json`;

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      displayResults(data);
      displayMembers(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(fiveDayThreeHourForecast);
