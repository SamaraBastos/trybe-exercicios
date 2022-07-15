// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   const testingScope = ( escopo ) => {
//     if( escopo === true ) {
//         const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope);
//     } else {
//         const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//  }

//  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//  'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.

oddsAndEvens.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;

})

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

oddsAndEvens.sort((a,b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);