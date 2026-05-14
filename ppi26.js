/*
    Programação para Internet - 2026
    Professor: Guilherme Leal
*/

// Ativar o formatador Prettier
// ALT + SHIFT + F

// # Aula 06/05 - Introdução a JavaScript

console.log("Bem vindo a PPI!");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; // Não pode mudar de valor
console.log(PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x ** 2, y, z); // ** potência
console.log(typeof x);

// Operadores relacionais
console.log("5" != 5); // Diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
console.log(x++); // incremento após o retorno do valor
console.log(x);
console.log(++x); // incremento antes do retorno do valor

// x++;
// ++x;
// x += 1;
// x = x + 1;

// Operadores lógicos - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

// if (condition) {
//   // condition === true
// } else {
//   // condition === false
// }

// Template Strings
let text = `React é 'tudo de bom!'\\
"Programar" é minha vida!/
Eu amo o IFRN`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length); // Tamanho

console.log(fruits[0]); // Posição 0

// Insere elemento no final da lista
fruits.push("Kiwi");
console.log(fruits);

// Remove e retorna o último elemento
console.log(fruits.pop());
console.log(fruits);

// Remove e retorna o primeiro elemento
console.log(fruits.shift());
console.log(fruits);

// Insere elemento no começo da lista
fruits.unshift("Lemon");
console.log(fruits);

// Argumento 1 - posição
// Argumento 2 - qts elementos serão removidos
// Argumento 3 - lista de elementos que serão inseridos
fruits.splice(2, 0, "Kiwi", "Blueberry");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// Desafio - substituir 'Apple' por 'Kiwi'
fruits.splice(3, 1, "Kiwi");
console.log(fruits);

// Busca índice do elemento 'Kiwi'
let index = fruits.indexOf("Kiwi");
console.log(index);

fruits.splice(index, 1, "Apple");
console.log(fruits);

console.log("Sort/Reverse");
let fruitsSort = fruits.toSorted(); // Não altera array
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); // Não altera array
console.log(fruits);
console.log(fruitsReverse);

// Ordem crescente
fruits.sort();
console.log(fruits);

// Ordem decrescente
fruits.reverse();
console.log(fruits);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// DESAFIO
// Criar um array 'numbers2' que armazene os valores de 'numbers' * 2
// Output: [90, 8, 18, 32, 50]
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b) => b - a)); //D

numbers.sort((a, b) => a - b);
// Maior valor
console.log("Maior =", numbers[numbers.length - 1]);
// Menor valor
console.log("Menor =", numbers[0]);

// **********************************
// Aula 13/05 - Funções, array destructuring, spread operator
console.log(fruits);

const fruits2 = ["Kiwi", "Avocado"];
console.log([...fruits2, "Grape"]);

// Spread - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra A
const out = [];
const letra = "a";

// for (let i = 0; i < fruits3.length; i++) {
//   const fruit = fruits3[i];
//   //toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }

// fruits3.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a primeira ocorrência,
// de acordo com a condição
let outFind = fruits3.find(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFind);

// filter - retorna TODAS as ocorrências,
// de acordo com a condição
let outFilter = fruits3.filter(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os
// números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
  soma += number;
});
console.log(soma);

// reduce
console.log(
  numbers.reduce((soma, number) => soma + number)
);

// Object
const pessoa = {
  nome: 'Zé Vaqueiro',
  idade: 25,
  profissao: 'Cantor/Compositor'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);
