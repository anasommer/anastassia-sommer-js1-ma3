/* 
Question 2
Make a call to the Rawg API.
*/
//name, rating, number of tags

const divEl = document.querySelector(".container");

const apiKey = `e112872f8e614dacad177b52eb1426f0`;
const apiUrl = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

async function getData() {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    const data = result.results;
    createHTML(data);
  } catch (error) {
    console.log(error);
    divEl.innerHTML = `Oooopsy, something is really wrong! 😱`;
  }
}

function createHTML(data) {
  divEl.classList.remove("lds-default");

  for (let i = 0; i < data.length; i++) {
    if (i === 8) {
      break;
    }
    divEl.innerHTML += `<ul>
                        <li>Name: ${data[i].name}</li>
                        <li>Rating: ${data[i].rating}</li>
                        <li>Tags: ${data[i].tags.length}</li>
                        </ul>`;
  }
}

getData();
