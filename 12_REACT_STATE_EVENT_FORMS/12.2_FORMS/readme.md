## 12.2 React Forms

Almost every little site these days has a form. How would you handle it using React?

### What was covered here?

Unlike forms on regular HTML, where we 'save' the input data on the DOM and access it as needed, on React we have to control these values using *state* and *event based components*. For instance, if you have a regular text input, you should have a state to save it's value and set it's onChange function to be a handler that sets the value of your state to the currently typed text.

By doing that, we gain full control over the information passed in by an user. You want to send a request to an API every time the user types in a letter on some input? You got it!! (but please don't)

You will find the React app [here](./form_v2.0)

#### Exercises

The exercise here was to create a simple form using handlers to access the information provided and, if need be, manipulate it. It's a redo of [this exercise](../../06_FRONTEND_INTRO/6.1_HTML_FORMS) done on module 6.

```
Crie um <fieldset> para os dados pessoais a seguir:

Nome - Texto

Limite de 40 caracteres

Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.

Campo obrigatório

Email - Texto

Limite de 50 caracteres

Campo obrigatório

CPF - Texto

Limite de 11 caracteres

Campo obrigatório

Endereço - Texto

Limite de 200 caracteres

Remover qualquer caracter especial que seja digitado

Campo obrigatório

Cidade - Texto

Limite de 28 caracteres

Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.

Campo obrigatório.

Estado - ComboBox

Todos os estados do Brasil

Campo obrigatório.

Tipo - Radio Button

Casa, Apartamento

Campo obrigatório.

Crie outro <fieldset> para dados do seu último emprego:

Resumo do currículo - TextArea

Limite de 1000 caracteres

Campo obrigatório.

Cargo - TextArea

Limite de 40 caracteres

Quando o mouse passar por cima deste campo (evento onMouseEnter), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.

Campo obrigatório

Descrição do cargo - Texto

Limite de 500 caracteres

Campo obrigatório

Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.

Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
```

### Comments

This is a simple task, but requires attention, specially if you are using the *class syntax* over the *function syntax*. Because of this, the student decided to do these exercises using classes, to further improve his general knowledge over React.

To make it clearer to the students he was mentoring to better explain how to handle Forms, the exercise was done in one big component, but design choices can be changed to better abstract this if need be.

###### Feedback

As always, any feedback or suggestion is welcomed.
