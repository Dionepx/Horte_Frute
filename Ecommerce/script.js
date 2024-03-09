import { data } from "./data.js";
const { produtos: {frutas, legumes} } = data

const divFrutas = document.getElementById('frutas');
const divLegumes = document.getElementById('legumes');
const divResultados = document.getElementById('resultados');
const search = document.getElementById('searchBar');
const buttonSearch = document.getElementById('btn');


function createElement(array, div) {
     array.map(el => div.innerHTML += `
          <div class='text-center d-flex flex-column'>
          <div>
               <img src='${el.URL}'>
          </div>
               <h4>Número: ${el.id}</h4>
               <h2>${el.nome}</h2>
               <h1>R$ ${el.preco_venda.toFixed(2)}</h1>
          </div>
     `)
};

function searchElement() {
     const filterFrutas = frutas.filter(el => search.value === el.nome);
     const filterLegumes = legumes.filter(el => search.value === el.nome);
     const newArray = [...filterFrutas, ...filterLegumes];
     divFrutas.innerHTML = ''
     divLegumes.innerHTML = ''
     divResultados.innerHTML = ''
     createElement(newArray, divResultados);
};

function app() {
     createElement(frutas, divFrutas);
     createElement(legumes, divLegumes);
};

// DUVIDA
// Se eu comentar o window, os produtos desaparecem por que?

window.addEventListener('load', app); // recarrega primeiro HTML e depois o JS
buttonSearch.addEventListener('click', searchElement); 