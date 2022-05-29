// function verificaPalindrome(palindromo){ 

// if(palindromo === 'arara'){
//     console.log(true);
// } else {
//  console.log(false)
// }
// }
// verificaPalindrome('arara')

//Duas formas de resolver o exercício
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
// function verificaPalindrome(word){
//     for(index in word){
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }
//   function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

  //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//   function arrayDeInteiros(numeros){
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
//     return indiceMaior;
//   }
//   console.log(arrayDeInteiros([2, 3, 6, 7, 10, 1]))

  //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//ex:
//   function arrayDeInteiros(numbers){
//     let menorIndice = 0;
//     for(let indice in numbers){
//      if(numbers[indice] < numbers[menorIndice]){
//         menorIndice = indice
//      }   
//     }
//     return menorIndice;
//   } 
// console.log(arrayDeInteiros([2, 3, 6, 7, 10, 1]))

// function arrayDeInteiros(numeros){
//     let indiceMenor = 0;
//     for(let indice in numeros){
//      if(numeros[indice] < numeros[indiceMenor]){
//         indiceMenor = indice
//      }   
//     }
//     return indiceMenor
// }
// console.log(arrayDeInteiros([2, 4, 6, 7, 10, 0, -3]))


//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function arrayDeNomes(names){
// let nomeMaior = names[0]
// for(let indice in names){
//     if(nomeMaior.length < names.length){
//     nomeMaior = names[indice]
// }
// }
// return nomeMaior
// }
// console.log(arrayDeNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.length < palavras[indice].length) {
//       maiorPalavra = palavras[indice];
//     }
//   }
//   return maiorPalavra;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda


//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.//Duas formas de resolver o exercício


// function maisRepetido(numeros) {
//   let contRepetido = 0;

//   let contNumero = 0;

//   let indexNumeroRepetido = 0;

//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// function maisRepetido(numeros) {
//   let num = {};

//   for (let index = 0; index < numeros.length; index += 1) {
//     let valor = numeros[index];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function somaTodosNumeros(numeros) {
//   let total = 0;
//   for (let index = 1; index <= numeros; index += 1) {
//     total = total + index;
//   }
//   return total;
// }
// console.log(somaTodosNumeros(5)); //15

//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

//Duas formas de resolver o exercício
// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split('');
//   fimPalavra = fimPalavra.split('');
//   controle = true;
//   for (let index = 0; index < fimPalavra.length; index += 1) {
//     if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//       controle = false;
//     }
//   }
//   return controle;
// }

// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//   let result;

//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       result = false;
//       break;
//     } else {
//       result = true;
//     }
//   }
  
//   return result;
// }

// console.log(verificaFimPalavra('trybe', 'be')); //true
// console.log(verificaFimPalavra('joaofernando', 'fernan')); //false



