## 8.2 - Map and Filter methods

### What was covered here?

Continue the topic on important JS array methods, on this lesson:

* map
* filter

### Exercises on this lesson

#### Exercise 1

Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
(Create an array of strings in the specified format)

-> A simple map. [Check it out](./exercises/exercise1.js)

#### Exercise 2

Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
(Create a function that returns an array of objects containing the name and age of each author when each published their books, ordered by age.)

-> A simple map + sort solves it [Check it out](./exercises/exercise2.js)


#### Exercise 3

Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
(Create an array that has all books of the 2 specifies genres)


-> A simple filter solves it [Check it out](./exercises/exercise3.js)


#### Exercise 4

Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
(Create an array that only has books with more than 60 years of 'published age' and order it from highest to lowest);


-> A simple filter + sort solves it [Check it out](./exercises/exercise4.js)


#### Exercise 5

Crie um array ordenado com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
(Create an array containing the name of every author of the 2 specified genres, ordered.)

-> A filter + map + sort solves it [Check it out](./exercises/exercise5.js)

#### Exercise 6

Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
(Create an array with the name of every book that has more than 60 years of published status)

-> A filter + map solves it [Check it out](./exercises/exercise6.js)

#### Exercise 7

Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).
(Find the name of the book written by an author that has 3 initial letters before it's last name)

-> A filter solves this one.

A non-trivial filter condition was used, [check it out](./exercises/exercise6.js)!

It's non trivial aspect is:
```javascript
  .filter(book => book.author.name.match(/(\w\. ){3}\w*/i))
```
The .match method returns *null* if it doesn't find the pattern, and that's why we can use it to evaluate to false here. The regex is rather simple, breaking it down to:

We want to find the sequence (\w\. ) = meaning 1 letter followed by a dot and a space 3 times in a row, and it could be 0 or more letters, representing by \w*

Lastly, we ask it to ignore upper/lower casing.

Important observation: that regex is equivalent to /(\w\.\s){3}\w*/i

But i thought that literally adding the white space there would make it a little easier to understand.


#### Comments

Understanding Array methods and knowing which to use at each case (in sort, avoiding using 'forEach' for everything) should be a desired skill on today's standards. This is such an important note i'll repeat it here from the last lesson.

###### Feedback

As always, any feedback or suggestion is welcomed.