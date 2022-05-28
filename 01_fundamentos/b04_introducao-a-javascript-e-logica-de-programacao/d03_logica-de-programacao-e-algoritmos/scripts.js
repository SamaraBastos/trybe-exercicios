//Exercicio 1

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

// //Exercicio 2 


// let word = 'tryber';

// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// /////////////////////////////////////////////////////

// // // let word = 'tryber';
// // let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);


// //Exercício 3 - Escreva dois algoritmos: um que retorne a maior palavra 
//deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);




//Exercicio 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50


// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

// BONUS

//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer,
 //seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

//  n = 5

// *****
// *****
// *****
// *****
// *****


// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// //   console.log(inputLine);
// };


//2- Para o segundo exercício, faça o mesmo que antes, //
//Mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****


let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};

//3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****


let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};