## 10.1-10.2 - Basic & Async tests with Jest

### What was covered here?

Having just the *assert* library is not enough to test different situations and to optimize these tests. On this lesson, the basics of testing regular cases and async cases were covered, reviewing the most common **matchers** we have:

* toBe
* toEqual
* toBeNull
* toBeUndefined
* toBeDefined
* toBeTruthy
* toBeFalsy
* toBeGreaterThan
* toBeGreaterThanOrEqual
* toBeLessThan
* toBeLessThanOrEqual
* toMatch
* toContain
* toHaveLength
* toContainEqual
* toHaveProperty
* toThrow
* toThrowError

### Exercises on this lesson

Each exercise has it's own test.js file, divided into [basic](./Basic_Tests) and [async](./Async_Tests). Due to the high similarity between basic tests, async was the main focus here.

#### Exercise 1

Defina os testes para uma função de soma.
(define tests for a sum function)

[Check it out](./Basic_Tests/sum.test.js)

#### Exercise 2

Defina testes para a função 'fizzbuzz' implementada
(Define tests to the implemented fizzbuzz function)

[Check it out](./Basic_Tests/fizz.test.js)

#### Exercise 3

Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
(write a test to verify a callback call inside a function).

[Check it out](./Async_Tests/callback.test.js)

### Exercise 4

Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
(using Promise syntax, write a test for both cases: user found and not found.)

### Exercise 5

(same as exercise 4 but with async/await)

[check 4 and 5 out](./Async_Tests/database.test.js)

### Exercise 6

O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'sd-01-block22-project-queries-unite', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-block21-mysql-vocabulary-booster' se encontram nessa lista.
(Given the code and the URL from github, make sure the two repositories cited are in the list returned by the function)

[Check it out](./Async_Tests/github.test.js)

### Exercise 7

Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
(create the function 'getanimal' that will pass both implemented tests)

Here i did a solution using async and another using Promise (direct use)[Check it out](./Async_Tests/finalPromise.test.js)


#### Comments

Unitary tests are a most on modern applications. They save you a lot of time (and money). Understanding how to work with the different types of code JS can have to build optimized and correct tests for each case is a must.

That said, dealing with callbacks and async functions on JS is one of the hardest parts of the language, it wouldn't be different when it comes to testing.

###### Feedback

As always, any feedback or suggestion is welcomed.