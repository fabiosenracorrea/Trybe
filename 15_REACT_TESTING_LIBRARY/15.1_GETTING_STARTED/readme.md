## 15.1 - React Testing Library - Getting Started

### What was covered here?

As we already know how important and time AND money saving tests are, we need to understand how to test react applications. We have tested functions before, but now it's time to test *user behavior*. And for that, we'll check out the documentation's recommended library: **react-testing-library**.

On the first lesson, we cover the basics on:

* getBy*
* getALlBy*
* queryBy*
* queryAllBy*
* findAllBy*

These combo really well with a bunch of different methods, which you can check out a really nice *cheatsheet* [here](https://testing-library.com/docs/react-testing-library/cheatsheet)

There's also use of special *Jest DOM* matchers created for react, covered on [here](https://github.com/testing-library/jest-dom)


### Exercises on this lesson

## Exercise 1

Implemente os testes:

- Necessário um botão para adicionar a tarefa.
- Botão precisa conter o texto "Adicionar".
- Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.

Solution [here](./exercise_1)

## Exercise 2

Teste a aplicação. Atenção ao que o teste orienta:

- Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.

- Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.

Solution [here](./exercise_2)

## Exercise 3

Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

- Adicionar funcionalidade de selecionar uma task.

- Adicionar botão para apagar a task selecionada.

Solution [here](./exercise_3)

#### Comments

Testing user behavior is fundamental to make sure your react application is performing as you expect it to be. Examining functionalities purely by function tests and human trial & error can only get you so far. As such, starting to understand how to test on React is crucial to develop next-level abilities when building your applications.

###### Feedback

As always, any feedback or suggestion is welcomed.
