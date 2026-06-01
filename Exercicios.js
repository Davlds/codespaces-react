// Exercício 1
// Crie três variáveis:
// nome
// idade
// curso
// Armazene seus dados nelas.
// Depois exiba a seguinte mensagem usando template string:
// Olá, meu nome é David, tenho 17 anos e faço o curso de Informática.

// let nome = "David";
// let idade = 17;
// let curso = "informatica";

// console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e faço o curso de ${curso}.`)

//-------------------------------------------------------------------------------------------------------------------

// Exercício 2
// Crie duas variáveis:
// idade = 18
// possuiCarteira = true
// Crie uma variável chamada:
// podeDirigir
// Ela deve armazenar o resultado de uma expressão lógica que verifique:
// a idade é maior ou igual a 18
// possui carteira
// Exiba o resultado no console.

// let idade = 18;
// let possuiCarteira = true;

// const podeDirigir = idade >= 18 && possuiCarteira;
// console.log(podeDirigir);

//----------------------------------------------------------------------------------------------------------------

// Exercício 3
// Dado o array:

// const frutas = ["Banana", "Maçã", "Laranja"];

// Faça as seguintes operações:
// Adicione "Kiwi" ao final.
// Adicione "Limão" no início.
// Remova a última fruta.
// Exiba o array final.

// frutas.push("kiwi");
// console.log(frutas);
// frutas.unshift("Limão");
// console.log(frutas);
// frutas.pop(frutas);
// console.log(frutas);

//----------------------------------------------------------------------------------------------------------------

// Exercício 4
// Dado o array:

//const numeros = [10, 20, 30, 40, 50];

// Utilize um for para calcular a soma de todos os elementos.

// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }

// console.log(soma);

//-----------------------------------------------------------------------------------------------------------------------

//Exercício 5
// Dado:

//const numeros = [1, 2, 3, 4, 5];

// Crie um novo array contendo o triplo de cada número.

// const numeros2 = [];
// for (let i = 0; i < numeros.length; i++) {
//     numeros2.push(numeros[i] * 3)
// };

// console.log(numeros2);

//-------------------------------------------------------------------------------------------------------------------------

// Exercício 6
// Dado:

//  const alunos = [
//    "Ana",
//    "Carlos",
//    "Amanda",
//    "Pedro",
//    "Arthur"
// ];

// Utilize filter() para criar um novo array contendo apenas os nomes que começam com a letra: "A"

// const nomesComA = alunos.filter(
//     (alunos) => alunos[0] === "A"
// );

// console.log(nomesComA);

//-------------------------------------------------------------------------------------------------------------------------------

// Exercício 7
// Considere:

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Webcam", preco: 200 }
];

// Parte A
// Calcule a soma de todos os preços:

// Parte B
// Ordene os produtos do menor preço para o maior preço:

// Parte C
// Filtre apenas os produtos com preço maior que: 100

 const total = produtos.reduce((acc, produtos) => acc + produtos.preco, 0);
 console.log("Soma dos preços:", total);

 const ordem = produtos.toSorted((a, b) => a.preco - b.preco);
 console.log("preços ordenados:", ordem);

 const precoMaior = produtos.filter(
   (produtos) => produtos.preco >= 100
  );
console.log("preços maior ou igual a 100", precoMaior);

// Desafio Extra ⭐
// Sem usar sort() nem toSorted(), descubra qual é o produto mais caro.
// Dica:
// Use um for ou reduce().

let produtoMaisCaro = produtos[0];
for (let i = 0; i < produtos.length; i++) {
  if(produtos[i].preco > produtoMaisCaro.preco){
    produtoMaisCaro = produtos[i];
  }
};
console.log(produtoMaisCaro);