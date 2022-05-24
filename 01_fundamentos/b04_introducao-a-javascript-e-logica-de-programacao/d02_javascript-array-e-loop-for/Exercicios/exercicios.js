// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Exercicio 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores 
// // nele contidos com a função console.log();
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index++) {
//    console.log(numbers[index])
// }
 
// //Exercicio 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index++) {
//   result += numbers[index];
// }
// console.log(result);

//Exercicios 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index++) {
//   result += numbers[index]
// }

// let average = result / numbers.length
// console.log(average);

//Exercicio 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index++) {
//   result += numbers[index]
// }

// let average = result / numbers.length
// console.log(average);

// if(average > 20 ){
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

//Exercicio 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = numbers[0];

// for (let index = 1; index < numbers.length; index++) {
//     if (numbers[index] > result) {
//         result = numbers[index];
//       }
//     }

//     console.log(result);

//Exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0){
//         result += 1;
//     }  
// }
// if (result === 0) {
//     console.log('nenhum valor ímpar encontrado');
//   } else {
//     console.log(result);
//   }


  //Exercicio 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = numbers[0];

// for (let index = 1; index < numbers.length; index++) {
//    if (numbers[index] < result) {
//        result = numbers[index];
//       }
//    }

//     console.log(result);


//Exercicio 9 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

// let array = [];

// for (let index = 1; index <= 25; index++) {
//    array.push(index);
// }

// console.log(array);

//Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um 
//dos elementos por 2.

// let array = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// let result = 0;

//  for (let index = 0; index < array.length; index++) {
//     console.log(array[index] / 2)
//  }