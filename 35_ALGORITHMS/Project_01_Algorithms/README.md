## Project 01 - Algorithms & Complexity

The first project of Trybe's 37th module, in which we continue our journey with Python. Now with algorithms.

### What was proposed here

As a literal copy/paste of the instructions:

---

## Desenvolvimento

Este repositório é composto por uma pasta, `challenges`. Essa pasta contém todos os arquivos que você utilizará nesse projeto.

Cada arquivo `.py`, dentro da pasta `challenges`, representa um requisito. Ou seja, os arquivos não tem ligação uns com os outros. Logo, os problemas devem ser resolvidos de forma separada.

Este repositório já contém um _template_ com a estrutura de diretórios e arquivos,. Veja abaixo:

```md
.
├── challenges
│   ├── challenge_anagrams.py
│   ├── challenge_find_the_duplicate.py
│   ├── challenge_palindromes_iterative.py
│   ├── challenge_palindromes_recursive.py
│   └── challenge_study_schedule.py
├── README.md
├── requirements.txt
└── setup.cfg
```

Apesar do projeto já possuir uma estrutura base, você quem deve implementar as funções. Novos arquivos podem ser criados conforme a necessidade.

Lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

O arquivo `requirements.txt` contém todos as dependências que serão utilizadas no projeto, ele está agindo como se fosse um `package.json` de um projeto `Node.js`.

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse artigo: https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```

Para executar cada arquivo separadamente, execute o comando:

```bash
$ python3 nome_do_arquivo.py
```

---

## Requisitos do projeto

#### 1 - Número de estudantes estudando no mesmo horário (Algoritmo de busca)

Você trabalha na maior empresa de educação do Brasil. Um certo dia, sua/seu `PM` quer saber qual horário tem a maior quantidade de pessoas acessando o conteúdo da plataforma ao mesmo tempo. Com esse dado em mãos, o/a PM saberá qual é o melhor horário para disponibilizar os materiais de estudo para ter o maior engajamento possível no sistema.

Toda vez que uma pessoa estudante abre o sistema, é cadastrado no banco de dados o horário de entrada (`start_time`). Da mesma forma funciona quando o estudante sai do sistema, é cadastrado no banco de dados o horário de saída (`end_time`).

Seu trabalho é descobrir qual o melhor horário para disponibilizar os conteúdos. Para achar o horário, utilize `força bruta`. Ou seja, para achar o melhor horário, passe valores diferentes para a variável `target_time`, analisando o retorno da função.

_Dica:_ Quando vou saber qual o melhor horário? Quando o contador retornado pela função for o maior.

**Exemplo:**

```md
# Nos arrays temos 6 estudantes

# estudante   1  2  3  4  5  6
start_time = [2, 1, 2, 1, 4, 4]
end_time   = [2, 2, 3, 5, 5, 5]

target_time = 5  # saída: 3, pois o quarto, o quinto e o sexto estudante estavam estudando nesse horário
target_time = 4  # saída: 3, pois o quarto, o quinto e o sexto estudante estavam estudando nesse horário ou em um horário em que o 4 está no meio (no caso do quarto estudante)
target_time = 3  # saída: 2, pois o terceiro e o quarto estudante estavam estudando nesse horário ou em um horário em que o 3 está no meio (no caso do quarto estudante)
target_time = 2  # saída: 4, pois o primeiro, o segundo, o terceiro e o quarto estudante estavam estudando nesse horário ou em um horário em que o 2 está no meio
target_time = 1  # saída: 2, pois o segundo e o quarto estudante estavam estudando nesse horário

Para esse exemplo, julgue que o melhor horário é o `2`
```

O índice `0` da lista `start_time` e o índice `0` da lista `end_time` são pertencentes **à mesma pessoa usuária**. Ou seja, o índice `0` da lista `start_time` e `end_time` são os horários de início e termino do estudo de uma pessoa usuária. O índice `1` da lista `start_time` e `end_time` são os horários de início e termino de estudos de outra pessoa usuária e por aí vai.

Caso mais de um `target_time` tenham empatado com a maior saída, o melhor horário é entre os horários empatados. Exemplo:

```md
# Nos arrays temos 4 estudantes

# estudante   1  2  3  4
start_time = [4, 1, 3, 2]
end_time   = [4, 3, 4, 5]

target_time = 5  # saída: 1, pois só o estudante do último índice estudou até 5
target_time = 4  # saída: 3, pois o primeiro estudante, o segundo e o último estudaram no horário de 4 ou em um horário que o 4 está no meio (no caso do último estudante)
target_time = 3  # saída: 3, pois o segundo estudante, o terceiro e o último estudaram no horário de 3 ou em um horário que o 3 está no meio (no caso do último estudante)
target_time = 2  # saída: 2, pois o segundo e o último estudante estudaram no horário de 2 ou em um horário que o 2 está no meio (no caso do segundo estudante)
target_time = 1  # saída: 1, pois só o segundo estudante estudou no horário 1 (no caso começou no horário 1)

Para esse exemplo, julgue que o melhor horário é entre `3` e `4`
```

- Este requisito será testado executando 10.000 vezes sobre uma mesma entrada. Tais execuções, **no avaliador**, devem acontecer integralmente em menos de 0.02 segundos. O tempo de execução do código na sua máquina pode variar em relação ao avaliador, então é importante levar somente ele em consideração.

**Dica:** use um algoritmo de, no máximo, complexidade `O(n)`

- Algoritmo deve utilizar a solução iterativa;

- Monte o `start_time` e o `end_time` da maneira que quiser;

- Caso o `target_time` passado não exista, o valor retornado pela função deve ser `0`;

- Código deve ser feito dentro do arquivo `challenges/challenge_study_schedule.py`.

**O que será verificado:**

- 1.1 - Retorne, para uma entrada específica, o melhor horário para disponibilizar o conteúdo

- 1.2 - Retorne, quando mais de um `target_time` empata com a maior saída, o melhor horário para disponibilizar o conteúdo

- 1.3 - Retorne `0` se  `start_time` recebe um valor vazio

- 1.4 - Retorne `0` se  `target_time` recebe um valor vazio

- 1.5 - Execute a função, somando 10.000 execuções para uma entrada pequena, em menos que 0.02s (tempo da execução do avaliador no Pull Request)

#### 2 - Palíndromos (Recursividade)

Dado uma _string_, determine se ela é um palíndromo ou não. Escreva uma função que irá determinar se uma _string_ é um palíndromo ou não. Um palíndromo é uma _string_, uma palavra, em que não faz diferença se ela é lida da esquerda para a direita ou vice-versa, pois ela mantêm o mesmo sentido. Por exemplo, `"ABCBA"`.

_Curiosidade:_ Existem frases palíndromas também, porém nesse exercício iremos fazer uma função que identifique apenas as palavras palíndromas.

**Exemplos:**

```md
word = "ANA"
# saída: True

word = "SOCOS"
# saída: True

word = "REVIVER"
# saída: True

word = "COXINHA"
# saída: False

word = "AGUA"
# saída: False
```

- O algoritmo deve ser feito utilizando a solução recursiva;

- Não se preocupe com a analise da complexidade desse algoritmo;

- Se for passado uma _string_ vazia, retorne `False`;

- Código deve ser feito dentro do arquivo `challenges/challenge_palindromes_recursive.py`.

**O que será verificado:**

- 2.1 - Retorne `true` se a palavra passada por parâmetro for um palíndromo

- 2.2 - Retorne `false` se a palavra passada por parâmetro não for um palíndromo

- 2.3 - Retorne `false` se nenhuma palavra for passada por parâmetro

#### 3 - Anagramas (Algoritmo de ordenação)

Faça um algoritmo que consiga comparar duas _strings_ e identificar se uma é um anagrama da outra. Ou seja, sua função irá receber duas strings de parâmetro e o retorno da função será um _booleano_, `True` ou `False`.

Mas o que é um anagrama? Vamos ver sua definição para entendermos melhor:

> "Um anagrama é uma espécie de jogo de palavras criado com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões, utilizando todas as letras originais exatamente uma vez."

**Exemplo:**

```md
first_string = "amor"
second_string = "roma"
# saída: True
# Explicação: Nesse caso o retorno da função é True, pois a palavra "roma" é um anagrama de "amor".


first_string = "pedra"
second_string = "perda"
# saída: True
# Explicação: Nesse caso o retorno também é True. Na palavra "pedra", trocamos o "d" de lugar com o "r" e formamos "perda", sendo assim um anagrama.


first_string = "pato"
second_string = "tapo"
# saída: True


# Agora vamos pra um exemplo onde não existe um anagrama
first_string = "coxinha"
second_string = "empada"
# saída: False
```

- Este requisito será testado executando 10.000 vezes sobre uma mesma entrada. Tais execuções, **no avaliador**, devem acontecer integralmente em menos de 2 segundos. O tempo de execução do código na sua máquina pode variar em relação ao avaliador, então é importante levar somente ele em consideração.

**Dica:** use um algoritmo de, no máximo, complexidade `O(n log n)`

- Utilize qualquer algoritmo que quiser (_Selection sort_, _Insertion sort_, _Bubble sort_, _Merge sort_, _Quick sort_ ou _TimSort_), desde que atinja a complexidade `O(n log n)`. Ou seja, preste bastante atenção na escolha do algoritmo e na implementação do mesmo;

- Você deve fazer sua própria implementação do algoritmo de ordenação. Ou seja, você não poderá utilizar bibliotecas com os algoritmos prontos;

- A função retorna `True` caso uma _string_ seja um anagrama da outra;

- A função retorna `False` caso uma _string_ **não seja** um anagrama da outra;

- Código deve ser feito dentro do arquivo `challenges/challenge_anagrams.py`.

**O que será verificado:**

- 3.1 - Retorne `true` se as palavras passadas forem anagramas

- 3.2 - Retorne `false` se as palavras passadas por parâmetro não forem anagramas

- 3.3 - Retorne `false` se a primeira palavra passada por parâmetro for uma string vazia

- 3.4 - Retorne `false` se a segunda palavra passada por parâmetro for uma string vazia

- 3.5 - Execute a função, somando 10.000 execuções para uma entrada pequena, em menos que 8.2s (tempo da execução do avaliador no Pull Request)

### Requisitos bônus:

#### 4 - Encontrando números repetidos (Algoritmo de busca)

Dada um _array_ de números inteiros contendo `n + 1` inteiros, chamado de `nums`, onde cada inteiro está no intervalo `[1, n]`.

Retorne apenas um número duplicado em `nums`.

**Exemplo:**

```md
nums = [1, 3, 4, 2, 2]
# saída: 2

nums = [3, 1, 3, 4, 2]
# saída: 3

nums = [1, 1]
# saída: 1

nums = [1, 1, 2]
# saída: 1

nums = [3, 1, 2, 4, 6, 5, 7, 7, 7, 8]
# saída: 7
```
- Caso não passe nenhum valor ou uma string ou não houver números repetidos retorne false;

- Este requisito será testado executando 10.000 vezes sobre uma mesma entrada. Tais execuções, **no avaliador**, devem acontecer integralmente em menos de 0.01 segundos. O tempo de execução do código na sua máquina pode variar em relação ao avaliador, então é importante levar somente ele em consideração.

**Dica:** use um algoritmo de, no máximo, complexidade `O(n log n)`

- O array montado deve:

  - Ter apenas números inteiros positivos maiores do que 1;

  - Ter apenas um único número repetindo duas ou mais vezes, todos os outros números devem aparecer apenas uma vez;

  - Ter, no mínimo, dois números.

- Código deve ser feito dentro do arquivo `challenge_find_the_duplicate.py`.

_Dica:_ Ordene o array.

**O que será verificado:**

- 4.1 - Retorne o número repetivo se a função receber, como parâmetro, uma lista com números repetidos

- 4.2 - Retorne `false` se a função não receber nenhum parâmetro

- 4.3 - Retorne `false` se a função receber, como parâmetro, uma string

- 4.4 - Retorne `false` se a função receber, como parâmetro, uma lista sem números repetidos

- 4.5 - Retorne `false` se a função receber, como parâmetro, apenas um valor

- 4.6 - Retorne `false` se a função receber, como parâmetro, um número negativo

- 4.7 - Execute a função, somando 10.000 execuções para uma entrada pequena, em menos que 0.01s (tempo da execução do avaliador no Pull Request)

#### 5 - Palíndromos (Iteratividade)

Resolva o mesmo problema, apresentado no [requisito dois](####-2---Palíndromos-(Recursividade)), porém dessa vez utilizando a solução iterativa.

- Este requisito será testado executando 10.000 vezes sobre uma mesma entrada. Tais execuções, **no avaliador**, devem acontecer integralmente em menos de 0.005 segundos. O tempo de execução do código na sua máquina pode variar em relação ao avaliador, então é importante levar somente ele em consideração.

**Dica:** use um algoritmo de, no máximo, complexidade `O(n)`

- Algoritmo deve utilizar a solução iterativa;

- Código deve ser feito dentro do arquivo `challenge_palindromes_iterative.py`.

**O que será verificado:**

- 5.1 - Retorne `true` se a palavra passada como parâmetro for um palíndromo, executando uma função iterativa

- 5.2 - Retorne true se a palavra passada como parâmetro for um palíndromo, executando uma função iterativa

- 5.3 - Retorne `false` se nenhuma palavra for passada como parâmetro, executando uma função iterativa

- 5.4 - Execute a função, somando 10.000 execuções para uma entrada pequena, em menos que 0.005s (tempo da execução do avaliador no Pull Request)

---

### Grade

This project got a **100%/100%** grade and can be checkout entirely on [here](https://github.com/tryber/sd-06-project-algorithms/pull/18).

#### Comments

Analyzing code speed is vital for some applications! Optimizing becomes part of your routine. (Just like [Discord's case](https://blog.discord.com/using-rust-to-scale-elixir-for-11-million-concurrent-users-c6f19fc029d3))

###### Feedback

As always, any feedback or suggestion is welcomed.
