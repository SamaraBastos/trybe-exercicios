// let frase = 'Tryber x aqui!';

// function substituir(resultado){ 
// resultado = frase.replace('x', 'Samara');
// return resultado;
// }
// console.log(substituir());


///////////////////////////////////////////////////////
/* 
let frase2 = 'muitas palavras e palavras repetidas'

let result = frase2.replace(/palavras/g, 'coisas');
console.log(result);
 */
///////////////////////////////////////////////////

/* 
let frase2 = 'muitas PAlavras e PALAvras repetidas'

let result = frase2.replace(/palavras/gi, 'coisas');
console.log(result); */

// function funcao2() {
// const skills = [
//   'HTML', 'CSS', 'JavaScript'
// ];
// return `${substituir()} Minhas três principais habilidades são: ${skills}`
// }
// console.log(funcao2())

///////////////////////////////////////////////////////////////////////////
/* const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome; // troca o valor do x dentro do array pelo nome recebido por parâmetro
    }
  }
  return fraseArray;
};
 */
console.log(substituaX('Bebeto'));

/////////////////////////////////////////////////////////////

/* const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));
 */