let ingredientItens = [
  '500 g de feijão carioquinha cozido',
  '200 g de toucinho',
  '1 concha de óleo',
  '1 cebola média picada',
  '4 dentes de alho',
  '5 ovos',
  '1 colher (sopa) de sal com alho',
  'cheiro-verde a gosto',
  '200 g de farinha de mandioca'
]

//function listaDeIngredientes() {

  let ingredientList = document.querySelector('.ingredient-list');

  for (let index = 0; index < ingredientItens.length; index += 1) {
    let ingredient = ingredientItens[index];

    let ingredientListItens = document.createElement('li');
    ingredientListItens.innerText = ingredient;

    ingredientList.appendChild(ingredientListItens);
  }
//}
//listaDeIngredientes();