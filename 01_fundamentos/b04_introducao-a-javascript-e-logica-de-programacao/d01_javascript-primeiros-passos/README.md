
Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

No JavaScript, existem 6 tipos primitivos:
String.
Number.
Boolean.
Null.
undefined.
Symbol (novo no ECMAScript (en-US) 6)

Tipagem Dinâmica

Ele é dinamicamente tipado, o que significa que nós não precisamos declarar seu tipo. Mas isso só é possível porque ele mesmo identifica o tipo da variável que estamos declarando e o atribui, mesmo que não explicitamente. Por exemplo:

const cliente = "Juliana"
Nós não precisamos dizer para o JavaScript que cliente é uma String, ele já sabe que é.

Operações Aritméticas

A linguagem Javascript tem um rico conjunto internos de operadores e disponibiliza os seguintes tipos para nós.

 

Aritméticos
Atribuição
Comparação
Lógicos
Bit a bit


Operadores Aritméticos


Considere as seguintes variáveis:

 

var A = 10;
var B = 20;


Operador	Descrição	       Exemplo

+	         Adição	           A + B = 30
–	        Subtração	       A – B = -10
*	       Multiplicação	   A * B = 200
/	         Divisão	       B / A = 2
%	          Módulo           B % A = 0
          (resto da divisão)	
++	       Incremento	       A++ = 11
—	        Decremento	       A– = 9

Operadores De Atribuição



Operador	Descrição	Exemplo
=	Atribuição	C = A + B atribui o valor de A + B em C
+=	Atribuição de soma	C += A equivale a C = C + A
-=	Atribuição de subtração	C -= A equivale a C = C – A
*=	Atribuição de multiplicação	C *= A equivale a C = C * A
/=	Atribuição de divisão	C /= A equivale a C = C / A
%=	Atribuição de resto	C %= A equivale a C = C % A








Condições If e Else

se e senão

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.



Operadores lógicos

Três principais operadores lógicos: &&, || e o !. Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.


