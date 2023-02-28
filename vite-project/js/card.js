import { DOMSelectors } from "./dom";

const query = {
  list: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen1: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen2: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen3: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen4: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen5: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen6: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen7: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen8: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },

  gen9: function () {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=102";
    async function getData(URL) {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        data.results.forEach(async (data) => {
          const response_2 = await fetch(data.url);
          const data_2 = await response_2.json();
          let name = data_2.name;
          let img = data_2.sprites.front_default;
          let id = data_2.id;
          let type = data_2.types[0].type.name;
          DOMSelectors.show.insertAdjacentHTML(
            "beforeend",
            `<div class="pokemon_card">
                <img src="${img}" class="img" alt="img"></img>               
                <h3 class="name">${name}</h3>
                <p class="id">ID: ${id}</p>
                <p class="type">Type: ${type}</p>
            </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("An error occured.");
      }
    }
    getData(URL);
  },
};

function clear() {
  DOMSelectors.show.innerHTML = "";
}

document.getElementById("all").addEventListener("click", function () {
  clear();
  query.list();
});

document.getElementById("gen1").addEventListener("click", function () {
  clear();
  query.gen1();
});

document.getElementById("gen2").addEventListener("click", function () {
  clear();
  query.gen2();
});

document.getElementById("gen3").addEventListener("click", function () {
  clear();
  query.gen3();
});

document.getElementById("gen4").addEventListener("click", function () {
  clear();
  query.gen4();
});

document.getElementById("gen5").addEventListener("click", function () {
  clear();
  query.gen5();
});

document.getElementById("gen6").addEventListener("click", function () {
  clear();
  query.gen6();
});

document.getElementById("gen7").addEventListener("click", function () {
  clear();
  query.gen7();
});

document.getElementById("gen8").addEventListener("click", function () {
  clear();
  query.gen8();
});

document.getElementById("gen9").addEventListener("click", function () {
  clear();
  query.gen9();
});

query.list();
