## 8.4 - Rest/Spread operator, Obj short syntax, Destructuring and more!

### What was covered here?

This lesson covers more some syntax improvements we've got since ES6+, such as:

* spread operator;
* parâmetro rest;
* object destructuring;
* array destructuring;
* default destructuring;
* abbreviation object literal;
* default params.

### Exercises on this lesson

#### Exercise 1

Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

-> Simple spread use. [Check it out](./exercises/exercise1.js)

#### Exercise 2

Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

-> Simple rest + reduce use. [Check it out](./exercises/exercise2.js)

#### Exercise 3

Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa.

-> Simple destructuring use. [Check it out](./exercises/exercise3.js)

#### Exercise 4

Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20.

-> A destructuring inside a filter solves it easily. [Check it out](./exercises/exercise4.js)

#### Exercise 5

Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só.

-> Simple array destructuring [Check it out](./exercises/exercise5.js)

#### Exercise 6

Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro.

-> Array destructuring inside arguments [Check it out](./exercises/exercise6.js)

#### Exercise 7

Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

-> Object destructuring inside arguments [Check it out](./exercises/exercise7.js)

#### Exercise 8

Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento.

-> Default argument value used. [Check it out](./exercises/exercise8.js)

#### Comments

The ability to write simpler code using new features is a huge plus to the language. The syntax improvements covered on this lesson are of a huge help on the day to day basis. If i were to point out which are more important, i'd say object destructuring and rest operators, due to it's incredible use when dealing with API responses.

###### Feedback

As always, any feedback or suggestion is welcomed.