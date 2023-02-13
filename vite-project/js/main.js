import { DOMSelectors } from "./dom";

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(DOMSelectors.input.value);
});

async function getData(pokemon) {
  try {
    let URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (URL.status < 200 || URL.status > 299) {
      throw error(URL);
    } else {
      const data = await URL.json();
      console.log(data);
      DOMSelectors.show.insertAdjacentHTML(
        "beforeend",
        `<div class="pokemon_card">
            <img src="${data.sprites.front_default}" class="img" alt="img"></img>               
                    <h3 class="name">${data.name}</h3>
                    <p class="id">ID: ${data.id}</p>
                    <p class="type1">${data.types[0].type.name}</p>
                    <button class="remove">Remove</button>
                </div>`
      );
      pokemon_card();
    }
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
}

function pokemon_card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
}
