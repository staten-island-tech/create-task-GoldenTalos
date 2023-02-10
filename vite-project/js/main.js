import { DOMSelectors } from "./dom";

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(DOMSelectors.input.value);
});

const query = async function () {
  try {
    let URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (URL.status < 200 || URL.status > 299) {
      throw error(URL);
    } else {
      const data = await response.json();
      console.log(data);
      function displayCharacters() {
        data.forEach((poke) => {
          DOMSelectors.pokemon.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
            <img src="${data.sprites.front_default}" class="img" alt="img"></img>               
                    <h3 class="name">${poke.name}</h3>
                    <p class="id">ID: ${poke.id}</p>
                    <p class="type1">${poke.types[0].type.name}</p>
                </div>`
          );
          pokemon_card();
        });
      }
      displayCharacters();
    }
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();

function pokemon_card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
}
getData("bulbasaur");
