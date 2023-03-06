import { DOMSelectors } from "./dom";
import "./card";

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
                    <p class="type">Type: ${data.types[0].type.name}</p>
                    <button class="remove">Remove</button>
                </div>`
      );
      pokemon_card();
    }
  } catch (error) {
    console.log(error);
    DOMSelectors.show.insertAdjacentHTML(
      "beforeend",
      `<div class ="msg"> <p> Sorry, the pokemon you're looking for cannot be found.</p>
     </div>`
    );
    /* setTimeout(function () {
      DOMSelectors.show.innerHTML = "";
    }, 2000); */
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

const clear = {
  clearStuff: function () {
    const pokecard = Array.from(document.querySelectorAll(".pokemon_card"));
    pokecard.forEach((card) => card.remove());
    const errormsg = Array.from(document.querySelectorAll(".msg"));
    errormsg.forEach((msg) => msg.remove());
    DOMSelectors.input.value = "";
  },
};

document.getElementById("search").addEventListener("click", function () {
  clear.clearStuff();
  getData();
});
