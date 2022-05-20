O DOM (Document Object Model) é uma interface que representa como os HTML e XML são lidos pelo browser. Após a leitura do documento HTML pelo browser, o DOM cria um objeto que faz uma representação do documento e define meios de como essa estrutura pode ser acessada, dessa forma podemos utilizar o JavaScript para manipular o DOM e assim alterar o estilo e o conteúdo de nossa página.


No DOM nossa página é representada por nós e objetos, e é através deles que iremos realizar a comunicação do nosso HTML com o JavaScript. Sendo assim, podemos dizer que o DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.



Seletores

getElementById (Acessar apenas um elemento)
getElementsByTagName
getElementsByClassName (HTML Colection)
querySelector
querySelectorAll (NodeList)


"Criar variaveis pra armazenar esses tipos de  comandos". 

document.getElementsByTagName('section') (HTML Colection)
//"section é o nome da tag"//

document.getElementsNyClassName('holiday') (HTML Colection)
//"holiday é o nome da classe declarada"//

document.querySelector('') 
//" nesse caso eu preciso especificar com o . que é uma classe ou # que é um ID, pois isso nao esta descrito no nome do seletor e neste seletor eu acesso apenas um elemento, mas pratico do que com os outros que retorna uma lista".//

document.querySelectorAll('') Nesse caso tambem eu preciso especificar com o . que é uma classe ou # que é um ID, pois isso nao esta descrito no nome do seletor 

(se tem o plural retorna o HTML Colection, vai retornar uma lista)

Selecionou um elemento e observou que e uma lista, (HTML Colection) voce precisa acessar por indice, se for a mesma coisa que voce quer fazer com todos, voce vai utilizar o FOR

EX:

for(index=0; index < tags.length;index += 1){
 tags[index].style.border = "solid black 4px"
}
