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
                    "frutas_quantidade": 20
               },
               {
                    "id": 2,
                    "nome": "Laranja",
                    "preco_venda": 2.30,
                    "preco_compra": 1.3,
                    "frutas_quantidade": 40
               },
               {
                    "id": 3,
                    "nome": "Morango",
                    "preco_venda": 2.00,
                    "preco_compra": 1,
                    "frutas_quantidade": 40
               },
          ],

          "legumes": [
               {
                    "id": 4,
                    "nome": "Cenoura",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "legumes_quantidade": 20
               },
               {
                    "id": 5,
                    "nome": "Brócolis",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "legumes_quantidade": 20
               },
               {
                    "id": 6,
                    "nome": "Abobrinha",
                    "preco_venda": 1.40,
                    "preco_compra": 0.90,
                    "legumes_quantidade": 20
               },
          ],
     },
}

// Funcoes
function venda(fruta, legume, frutas_qtd, legumes_qtd) {
     let venda = 0

     for (let i = 0; i < data.produtos.length; i++) {
          const elemento = data.produtos[i];

          if (elemento.nome === fruta || elemento.nome === legume) {
               if (frutas_qtd > elemento.frutas_quantidade && legumes_qtd > elemento.legumes_quantidade || frutas_qtd && legumes_qtd) {
                    return 'Não é possível vender'
               }

               venda = elemento.preco_venda * frutas_qtd || elemento.preco_venda * legumes_qtd
               elemento.legumes_quantidade -= frutas_qtd || legumes_qtd
               data.saldo += venda
          }
     }

     return `Venda concluída: R$ ${venda.toFixed(2)}`
}

// function compra(fruta, legume, qtd) {
//      let compra = 0

//      for (let i = 0; i < data.produtos.length; i++) {
//           const elemento = data.produtos[i];

//           if (elemento.nome === fruta || elemento.nome === legume) {
//                compra = elemento.preco_compra * qtd
//                elemento.quantidade += qtd
//                data.saldo += compra
//           }
//      }

//      return `Compra concluída: R$${compra.toFixed(2)}`
// }

// Chamada de venda
const venda1 = venda("Banana", "Cenoura", 5, 5)

// Chamada de compra
// const compra1 = compra("Banana", 5)

// Saida final
console.log(venda1)
console.log(data)