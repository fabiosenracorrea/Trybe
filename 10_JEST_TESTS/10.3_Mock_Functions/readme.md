## 10.3 - Mock Functions

### What was covered here?

Some scenarios require us to rely on async and time consuming code. On clear example of this is an API request to an external endpoint. To make sure our tests don't take too long and don't 'over-request' the API we have a connection with, sometimes it might be useful to *mock* some of our functions in order to test them efficiently.

Other times, we may be interested in checking if some code is calling a function properly. To do this, we have to *mock* said function first.

And on this module it was covered 3 main ways of *mocking* functions:

* jest.fn()
* jest.mock()
* jest.spyOn()

As for the tools to better *mock* these functions, we checked quite a few methods, such as:

* toHaveBeenCalled()
* toHaveBeenCalledTimes(*n*)
* mockReturnValue(*value*)
* mockResolvedValue(*value*)
* mockRejectedValue(*value*)
* mockImplementation(*func*)
* mockRestore()

### Exercises on this lesson

#### jest.fn() Exercise 1

Escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().

```javascript
const randomNumber = () => // Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0
```
(Write a test to verify that randomNumber is called when we call isDivisible. Random number has to return a random num between 1 and 100.)

Simple solution. Just need to make sure to hijack the 'randomNumber' function with `jest.fn()` and then call`isDivisible`.

[Check it out](./jestFN/jestfn.test.js)

#### jest.fn() Exercise 2

Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.

(test that, when randomNumber returns an even number and isDivisible has 2 as parameter, true is returned.)

Similar to the last one, we just need to mock the returned value as well.

[Check it out](./jestFN/jestfn.test.js)

#### jest.fn() Exercise 3

Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.

(similarly to exs 2, mock 4 different return values and test the expected result for each value)

[Check it out](./jestFN/jestfn.test.js)

#### mock/spy Exercise 1

Faça o mock da função subtrair e teste sua chamada.
(mock 'subtrair' and test its call)

[Check it out](./mock_spy/math.test.js)

#### mock/spy Exercise 2

Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
(mock 'multiplicar' and implement the returned value to 10. Test the call and the return.)

[Check it out](./mock_spy/math.test.js)

#### Exercise 1

Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

(create a function to generate a number from 0 to 100. Mock this function to return 10 and test if a function call cane be traced)

[Check it out](./module_exercises/randomInt.test.js)

#### Exercise 2

Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

(create a new implementation with 'mock' for the function that receives 2 parameters and return the division of them, only one time. Create the necessary tests)

[Check it out](./module_exercises/randomIntMock.test.js)

#### Exercise 3

Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

(Still using the random function, create an implementation that receives 3 numbers and return their multiplication. After that, create a new implementation, that receives 1 number and return double it's value. Test whats needed.)

[Check it out](./module_exercises/randomIntSpy.test.js)

#### Bonus Exercise

O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

```
{
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}
```

(Mock the fetch function to test it's return value against an object similar to the one above.)

[Check it out](./module_exercises/apiFetch.test.js)

#### Comments

Understanding the correct method of 'mocking' a function can lead to simpler and more direct tests. It should be noted that altering a function behavior is not necessary what should be done, these exercises were done with this in mind, just trying to learn the methods that can do this.

###### Feedback

As always, any feedback or suggestion is welcomed.