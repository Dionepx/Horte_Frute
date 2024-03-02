import { data } from "./data.js";

const divFrutas = document.getElementById('frutas');
const divLegumes = document.getElementById('legumes');
const searchBar = document.getElementById('search');
const buttonB = document.getElementById('button')

// data is an object, not an array. So, data.map() wont work
data.produtos.frutas.map(el => divFrutas.innerHTML += `
     <div class='container-fruta'>
          <img src='${el.URL}'>
          <h4>Número: ${el.id}</h4>
          <h2>${el.nome}</h2>
          <h1>R$ ${el.preco_venda.toFixed(2)}<h1>
     </div>
`);


data.produtos.legumes.map(el => divLegumes.innerHTML += `
<div class='container-fruta'>
     <img src='${el.URL}'>
     <h4>Número: ${el.id}</h4>
     <h2>${el.nome}</h2>
     <h1>R$ ${el.preco_venda.toFixed(2)}<h1>
</div>
`)