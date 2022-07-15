// //Tradicional

// // const printName = function () {
// //     const myName = 'Lucas';
// //     return myName;
// //   };

// //   console.log(printName());

//   //Arrow Function

// const printName = () => {
//   const myName = 'Lucas';
//   return myName;
// };


// console.log(printName());

// //////////Simplificando mais ainda///////////////

// const printName = () => 'Lucas';
// console.log(printName());

// //Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// //Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

//ternary operator


// // A sintaxe básica do operador ternário é muito simples:

// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:

// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression); // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression); // isso é mentira

///////////////////////////////////////////////////////////////////////////


// // Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//     if (age >= 18) {
//       return `Você tem idade para dirigir!`;
//     } else {
//       return `Você ainda não tem idade para dirigir...`;
//     }
//   };

// const checkTernary = (age) => (
//   age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
// );

// ------------------------

//   // Situação em que usar o operador ternário não faz muito sentido:
// const checkIfElse = (fruit) => {
//   if (fruit === `maçã`) {
//     return `Essa fruta é vermelha`;
//   } else if (fruit === `banana`) {
//     return `Esta fruta é amarela`;
//   } else {
//     return `Não sei a cor`;
//   }
// };

// const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
//   : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!


//.split

/* const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Fala Tribo, Beleza?'))  */

//Objeto
/* 
  function objetoPessoa (nome, idade) {
    return {
      nome: nome,
      idade: idade
    }
  }
  console.log(objetoPessoa('Joaquim', 25)); */
/* 
  const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
  console.log(objetoPessoa('Joaquim', 25)); */
/* 
  const printName = () => {
    const myName = 'Lucas';
    return myName;
  }; */
/* 
console.log(printName()); */

/* const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2)); */

//operador ternário

// A sintaxe básica do operador ternário é muito simples:
//`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
/* 
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira */

// Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.
// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa;

// Situação em que é mais simples usar o operador ternário:
/* const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
); */

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
/* const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`); */

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!