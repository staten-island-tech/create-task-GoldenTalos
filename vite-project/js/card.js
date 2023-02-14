import { DOMSelectors } from "./dom";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayCharacters() {
      data.results.forEach(async (data) => {
        const response2 = await fetch(data.url);
        const data2 = await response2.json();
        let name = data2.name;
        name = name.charAt(0).toUpperCase().slice(1);
        let img = data2.sprites.front_default;
        DOMSelectors.show.insertAdjacentHTML(
          "beforeend",
          `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
            </div>`
        );
      });
    }
    displayCharacters();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();
