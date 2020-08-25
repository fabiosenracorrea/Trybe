# Javascript - Eventos

## O que vamos aprender?

Durante à introdução ao Desenvolvimento Web, vimos que uma página web é formada por 3 pilares, cada um com sua respectiva linguagem:

* Conteúdo - HTML
* Estilização - CSS
* Lidar com a interação da pessoa usuária - JavaScript

Você já aprendeu como manipular os outros dois pilares com o Javascript, para criar e/ou editar algum elemento. Agora vamos entender como que conseguimos entender e *responder* às interações que a pessoa usuária tem com a nossa página.

## Você será capaz de:

* Estruturar uma página HTML dinâmica, que reage da forma adequada às interações do usuário;
* Entender os tipos de eventos existentes no Javascript;
* Escolher o melhor evento para cada necessidade da sua página.

## Por que isso é importante?

Quando você acessa uma página

Muitas das vezes, você como pessoa desenvolvedora de software terá que escrever código que *responda* à essa interação. Ou seja, o seu código só vai ser executado *se o usuário realizar a ação esperada*.

## Conteúdo

Um evento no Javascript é toda e qualquer ação que o browser e/ou quem está usando a página executa para manipular o contúdo ali disposto. Quando você abre uma página, você tem à sua frente uma série de elementos HTML: parágrafos, títulos, botões, links, entre outros.

Suponha que nesta página que você está exista um botão. O que normalmente acontece quando você clica nele? Bem, esperamos que alguma ação seja executada, não é mesmo? Pois bem: ao clicar neste botão você entregou o que aquele elemento estava esperando para executar a sua ação (ou melhor, sua *função*): um evento. Mais especificamente, um evento de clique.

Além dos eventos provenientes da interação da pessoa com a página, existem aqu