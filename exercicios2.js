// Desafio 1
// Crie um array chamado alunos contendo pelo menos 5 nomes.
// Faça o seguinte:
// Exiba todos os nomes no console.
// Exiba apenas o primeiro aluno.
// Exiba a quantidade total de alunos.
// Adicione mais um aluno ao final da lista.
// Remova o último aluno.

// const alunos = ["David", "Joelson", "Eloizy", "Cezar", "Hioranna"];
// console.log(alunos);

// console.log(alunos[0]);

// console.log(alunos.length);

// alunos.push("Clara");
// console.log(alunos);

// alunos.pop(alunos);
// console.log(alunos);

//---------------------------------------------------------------------------------------------------------------------------

// Desafio 2
// Crie um array com 10 números inteiros.
// Faça o seguinte:
// Mostre todos os números.
// Calcule a soma de todos eles.
// Mostre o maior número.
// Mostre o menor número.
// Calcule a média dos valores.

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num);

// let soma = 0
// for (let i = 0; i < num.length; i++) {
//     soma += num[i]
// };
// console.log(soma);

// const maior = num.reduce((acc, numero) =>{
//     if (numero > acc) {
//         return numero;
//     }

//     return acc;
// });

// console.log("Maior:", maior);

// const menor = num.reduce((acc, numero) =>{
//     if (numero < acc) {
//         return numero;
//     }

//     return acc;
// });

// console.log("Menor:", menor);

// const media = soma / num.length;
// console.log("Media:", media);

//---------------------------------------------------------------------------------------------------------------------------

// Desafio 3
// Crie um array de objetos chamado produtos.
// Cada objeto deve possuir:
// nome
// preco
// Cadastre pelo menos 5 produtos.
// Depois:
// Mostre todos os produtos.
// Mostre apenas os produtos com preço maior que R$100.
// Calcule a soma de todos os preços.
// Descubra qual produto possui o maior preço.

const produtos = [
    {nome: "Caneta", preco: 2 },
    {nome: "Lapis", preco: 1 },
    {nome: "Caderno", preco: 38 },
    {nome: "Bolsa", preco: 120 },
    {nome: "Garrafa", preco: 46 },
];

// console.log(produtos);

// const maior100 = produtos.filter(
//     (produto) => produto.preco > 100
// );
// console.log(maior100);

// let soma = 0
// for (let i = 0; i < produtos.length; i++) {
//     soma += produtos[i].preco;
// };

// console.log(soma);

// let maior = produtos.reduce((acc, produto) =>{
//     if (produto.preco > acc.preco) {
//         return produto;
//     }

//     return acc
// });

// console.log(maior);

//---------------------------------------------------------------------------------------------------------------------------

// Desafio 4

// Utilizando o array do desafio anterior:

// Crie uma lista ordenada do menor para o maior preço.
// Crie outra lista ordenada do maior para o menor preço.
// Mostre apenas os nomes dos produtos ordenados.

const ordemMaior = produtos.toSorted((a, b) => a.preco - b.preco);
console.log(ordemMaior);
const ordemMenor = produtos.toSorted((a, b) => b.preco - a.preco);
console.log(ordemMenor);

console.log(produtos.toSorted((a, b) =>
      a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
    )
    .map(produto => produto.nome)
);