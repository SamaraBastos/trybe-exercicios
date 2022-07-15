//Numero 1

/* const fatorial = ((a) => {

  a = a * (a - 1) * (a - 2) * (a - 3) * (a - 4);
  return a;
});
console.log(fatorial(5));
 */
///////////////////////////////////////////////////

/* const fatorial = ((a) => {

  a = a * 4 * 3 * 2 * 1
  return a;
});
console.log(fatorial(5)); */

///////////////////////////////////////////////////////

/* let b = 4;
let c = 3;
let d = 2;
let e = 1;

const fatorial = ((a) => {

  a = a * b * c * d * e
  return a;
});
console.log(fatorial(5))*/;

/////////////////////////////////////////////////////
/* const factorial = (number) => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}; */
///////////////////////////////////////////////////////////
/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); */
////////////////////////////////////////////////////////////////////////
//Numero 2

/* let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu';
let stringVazia = '';

longestWord.split(' ').forEach(word => {
  if(word.trim().length > stringVazia.length){
    stringVazia = word.trim();
  }
});
console.log(stringVazia); */

////////////////////////////////////////////////////////

/* let phase = longestWord.split(' ').reduce((parametro1, parametro2) => {
if(parametro1.length < parametro2.trim().length){
  return parametro2.trim();
}
return parametro1;
});
console.log(phase);
 */
/////////////////////////////////////////////////////

/* let words = longestWord.split(' ');
let words2 = '';

for (frase of words){
  if(frase.trim().length > words2.length){
    words2 = frase.trim();
  }
}
console.log(words2); */

/////////////////////////////////////////////////
/* 
const resultado = longestWord
.match(/\w+/g)
.sort((a, b) => b.length - a.length)[0];

console.log(resultado); */

///////////////////////////////////////////////

/* const maiorPalavra = ((string) => {
  let qualquerCoisa = longestWord.split(' ');
  let coisa = 0;
  let nana = null;
  qualquerCoisa.forEach((str) => {
    if (coisa < str.length) {
      coisa = str.length;
      nana = str;
    }

  });
  return nana;
});
console.log(maiorPalavra()); */

/////////////////////////////////////////////
/* 
const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu')); */

/////////////////////////////////////////////////////////////////////////

/* const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu')); */