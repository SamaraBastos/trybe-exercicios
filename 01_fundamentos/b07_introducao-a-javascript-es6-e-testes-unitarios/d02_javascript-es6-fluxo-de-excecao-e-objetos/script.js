/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3));
 */
///////////////////////////////////////////////

/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23 */

//////////////////////////////////////////////

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3')); */

////////////////////////////////////////////////////////

/* const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3')); */

/////////////////////////////////////////////////////////////////
/* 
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3')); */

////////////////////////////////////////

/* const verificaValores = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Erro! Os valores precisam ser númericos');
  }
}

const soma = (a, b) => {
  try{
    verificaValores(a, b);
    return a + b;
  }
  catch (erro) {
    return erro.message;
  }
}

console.log(soma(2, '6')); */