// Exercicio 1

// const a = 10
// const b = 15

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log ('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// Exercicio 2

// const a = 10;
// const b = 15;

// if(a > b){
//   console.log("'a' é maior que 'b'");
// } else{
//   console.log("'b' é maior que 'a'");
// }

// Exercicio 3

// const a = 10;
// const b = 15;
// const c = 30;

// if(a > b > c){
//   console.log("'a' é maior que 'b' e maior que 'c'")
// } else if(b > c > a){
//     console.log("'b' é maior que 'b' e maior que 'c'")
// } else{
//     console.log("'c' é maior que 'a' e maior que 'b'")
// }

/////////////////////////////////////////////////////////////////////////

// const a = 6;
// const b = 4;
// const c = 2;

// if (a > b && a > c) {
//   console.log('O maior número é: ' + a + ' (a)');
// } else if (b > a && b > c) {
//   console.log('O maior número é: ' + b + ' (b)');
// } else {
//   console.log('O maior número é: ' + c + ' (c)');
// };


// Exercicio 4

// const valor = 96

// if(valor > 0){
//     console.log("positive")
// } else if(valor < 0 ){
//     console.log("negative")
// } else{
//     console.log("zero")
// }


// Exercicio 5

// const anguloOne = 40;
// const anguloTwo = 50;
// const anguloThree = 90;

// const angulos = anguloOne + anguloTwo + anguloThree;

// if(angulos % 2 == 0){
// console.log(true)
// } else if(anguloTwo % 2 == 0){
//     console.log(false)
// } else{
//     console.log('Erro: ângulo inválido')
// }

//////////////////////////////////////////////

// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }

// Exercicio 6

// const chessPiece = 'peão';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

// Exercicio 7


// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Exercicio 8

// const num1 = 30;
// const num2 = 15;
// const num3 = 10;

// if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
//     console.log("true")
// } else{
//     console.log("false")
// }

//////////////////////////////////////////////////////////


// const a = 1;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// };
// console.log(isEven);



// Exercicio 9

// const num1 = 30;
// const num2 = 15;
// const num3 = 10;

// if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
//     console.log("true")
// } else{
//     console.log("false")
// }

/////////////////////////////////////////////////////////////////


// const a = 1;
// const b = 3;
// const c = 5;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// };
// console.log(isOdd);

// // Exercicio 10


// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// // } else {
// //   console.log("Error, os valores não podem ser negativos");
// // };

// // Exercicio 11


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));