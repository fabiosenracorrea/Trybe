## 8.1 Higher Order Functions

### What was covered here?

Higher Order Functions (HOF) are just functions that either take a function as an argument (we call these functions as arguments *callbacks*) or that returns a function. Or both.

When covering modern Javascript, we have a lot of HOFs, but this module is going to focus it's content on data manipulation, more specifically Array methods.

On this lesson, it was covered:

* forEach
* find
* sort
* some
* every

### Exercises on this lesson

Each exercise has it's own JS file dedicated to it. You can find the list files [here](./exercises) or click individually below as you go through them.

#### Exercise 1

Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
(Find the name of the first author born in 1947)

-> A simple .find is used. [Check it out](./exercises/exercise1.js)

#### Exercise 2

Retorne o nome do livro de menor nome.
(Return the smallest book name)

-> Two simple functions were created, one of which used forEach, while the other sorted the elements according to it's name length. [Check it out](./exercises/exercise2.js)

#### Exercise 3

Encontre o primeiro livro cujo nome possui 26 caracteres.
(Find the first book that has a name with 26 characters).

-> A simple find function. [Check it out](./exercises/exercise3.js)

#### Exercise 4

Ordene os livros por data de lançamento em ordem decrescente.
(Order the books by releaseYear, starting from biggest)

-> A simple sort function.[Check it out](./exercises/exercise4.js)

#### Exercise 5

Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
(Create a function to check if every author was born in the 20th century)

-> A simple .every function. [Check it out](./exercises/exercise5.js)

#### Exercise 6

Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
(Create a function that finds if any book was released in the 80s)

-> A simple .some function [Check it out](./exercises/exercise6.js)

#### Exercise 7

Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
(Create a function to check if every author was born in a unique year)

-> Decided to up the difficulty of the challenge here, and used a reduce function. Also added a simple function using forEach and another using sort! [Check it out](./exercises/exercise7.js)

#### Comments

Understanding Array methods and knowing which to use at each case (in sort, avoiding using 'forEach' for everything) should be a desired skill on today's standards.

###### Feedback

As always, any feedback or suggestion is welcomed.