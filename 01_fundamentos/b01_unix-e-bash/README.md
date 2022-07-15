#O que é Unix?

O Unix é um sistema operacional portável (pode ser executado independentemente da arquitetura), multitarefas (executa várias tarefas ao mesmo tempo) e multiusuário (permite mais de um usuário ao mesmo tempo). A maioria dos servidores ou provedores cloud utilizam esse sistema (ou o Linux). O Unix é considerado o pai dos sistemas operacionais, pois serviu de base para vários sistemas subsequentes.

#Estrutura

**Kernel**: é o núcleo do sistema operacional. O Kernel é a parte mais interna e que trabalha diretamente sobre o hardware, que traduz os comandos do usuário para instruções de máquina. O Kernel não interage com o usuário do sistema.

**Shell**: é o programa que atua como interface entre o Kernel e o usuário. O Shell é uma linha de comando, que recebe comandos digitados pelo usuário.

**Servidor X**: é a interface gráfica implementada nas versões mais recentes do Unix.
Outras aplicações: são programas que podem ser invocados pelo Shell para realizar diversas tarefas. Nessa divisão também consta o sistema de arquivos.

#Quais são os sistemas operacionais baseados no Unix?

São muitos os sistemas baseados no Unix. Então, selecionei os principais:

Linux
MacOS
Solaris
BSD


#Bash

Um tipo de shell muito utilizado no sistema Unix.

Idealizado por Steven Bourne, em 1977, o bash é o acrônimo de Bourne Again Shell. Ele é, ao mesmo tempo, um shell Unix e um interpretador de linguagem de comando.  

Essa linguagem de programação também pode ser considerada um processador que executa comandos. Isso porque os desenvolvedores costumam utilizar o bash para emitir comandos simples e diretos que auxiliam na automação de tarefas cotidianas. 


#Principais comandos do Terminal

echo [texto desejado]
Apresenta um texto no console
cd [caminho desejado]
Navega para outra pasta
ls
Mostra os elementos presentes na pasta
pwd
Mostra em qual path o usuário está no momento na arvore de diretórios
mkdir [nome da pasta desejado]
Cria uma nova pasta
rm [nome do arquivo]
Apaga um arquivo
rm -rf [nome da pasta]
Apaga uma pasta
sudo [comando]
Permite rodar comandos que necessitam de privilégio de super usuário
touch [nome desejado do arquivo]
Cria ou atualiza um arquivo
cat [nome do arquivo]
Captura o conteúdo de um arquivo e mostra na tela
less [nome do arquivo]
Mostra o conteúdo de um arquivo no console
history
Mostra o histórico de comandos
grep [texto desejado] [arquivo desejado]
Filtra o conteúdo de um arquivo através do texto desejado e mostra na tela o resultado
cp [nome do arquivo] [nome do novo arquivo]
Copia o conteúdo de um arquivo para um novo arquivo
mv [nome do arquivo] [nome do novo arquivo]
Move o conteúdo de arquivo para outro apagando o anterior
clear
Limpa os textos que estão aparecendo no console
exit
Fecha a sessão atual
