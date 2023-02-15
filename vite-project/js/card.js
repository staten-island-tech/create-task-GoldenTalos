import { DOMSelectors } from "./dom";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayCharacters() {
      data.results.forEach(async (data) => {
        const response_2 = await fetch(data.url);
        const data_2 = await response_2.json();
        let name = data_2.name;
        console.log(name);
        let img = data_2.sprites.front_default;
        let id = data_2.id;
        let type = data_2.types[0].type.name;
        "beforeend",
          `<div class="pokemon-card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type1">${type}</p>
            </div>`;
      });
    }
    displayCharacters();

    function gen1() {}
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();
