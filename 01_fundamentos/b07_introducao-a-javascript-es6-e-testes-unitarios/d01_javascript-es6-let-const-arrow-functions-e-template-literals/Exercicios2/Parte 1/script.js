//Numero 1
/* function testingScope(escopo) {
  if(escopo === true) {
    var ifScope = 'Não devo ser utilizada for do meu escopo(if)';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo(else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que eu estou fazendo aqui ? :O');
}

testingScope(true); */
/* 
const testingScope = escopo => {
  if(escopo == true){
    const ifScope = `Não devo ser utilizada for do meu escopo(if)`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora do meu escopo(else)`;
    console.log(elseScope);
  }
}
testingScope(true); */

//Numero 2

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function(a, b){ 
  if(a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); */

////////////////////////////////////////////////

// oddsAndEvens.sort((a, b) => {
//    let c = a - b; 
//    return c;
// })
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

/////////////////////////////////////////////////////////// 

//console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

///////////////////////////////////////////////////////////

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7; 
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada
 */
