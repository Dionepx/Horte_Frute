

// QUANDO USAR {OBJETO} E [ARRAY] ?



const data = {
     "nome": 'Horte Frute',
     "saldo": 0,

     "produtos": {
          "frutas": [
               {
                    "id": 1,
                    "nome": "Banana",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "quantidade": 20
               },
               {
                    "id": 2,
                    "nome": "Laranja",
                    "preco_venda": 2.30,
                    "preco_compra": 1.3,
                    "quantidade": 40
               },
               {
                    "id": 3,
                    "nome": "Morango",
                    "preco_venda": 2.00,
                    "preco_compra": 1,
                    "quantidade": 40
               },
          ],

          "legumes": [
               {
                    "id": 4,
                    "nome": "Cenoura",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "quantidade": 20
               },
               {
                    "id": 5,
                    "nome": "Brócolis",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "quantidade": 20
               },
               {
                    "id": 6,
                    "nome": "Abobrinha",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "quantidade": 20
               },
          ],
     },
}

// Funcoes

function venda(array, nome, qtd) {
     let venda = 0;

     for (let i = 0; i < array.length; i++) {
          const elemento = array[i];

          if (elemento.nome === nome) {
               if (qtd > elemento.quantidade || qtd <= 0) {
                    return 'Não é possível vender';
               };

               venda = elemento.preco_venda * qtd;
               elemento.quantidade -= qtd;
               data.saldo += venda;
          }
     }

     return `Venda concluída: R$ ${venda.toFixed(2)}`;
}



function compra(array, nome, qtd) {
     let compra = 0;

     for (let i = 0; i < array.length; i++) {
          const elemento = array[i];

          if (elemento.nome === nome) {
               compra = elemento.preco_compra * qtd;
               elemento.quantidade += qtd;
               data.saldo += compra;
          }

          return `Compra concluída: R$ ${compra.toFixed(2)}`;
     }

//Chamada de venda 
const venda1 = venda(data.produtos.legumes, "Cenoura", 5);

//Chamada de compra
const compra1 = compra(data.produtos.frutas, "Banana", 5);

//Saida final
// console.log(venda1)
// console.log(compra1)

// console.log(data.produtos.frutas)