## 6.1 - HTML FORMS

HTML Forms are present in almost every application, and understanding how to build and manipulate it's data effectively is crucial.

And for that, knowing how to use each type of input is mandatory. You can check those types [here](https://www.w3schools.com/html/html_form_input_types.asp).

#### Exercises

```
Criando um formulário de currículo.
Crie um arquivo HTML chamado form.html para o formulário.

Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo styles.css.

Crie também um arquivo script.js para seu código JavaScript.

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

Crie um <fieldset> para os seguintes dados pessoais:

Nome - Texto

Limite de 40 caracteres

Campo obrigatório

Email - Texto

Limite de 50 caracteres

Campo obrigatório

Bonus: Utilize regex para validar o campo email.

Formato esperado: texto@texto.texto.

Dica: Para estudar como o regex funciona, utilize o link.

CPF - Texto

Limite de 11 caracteres

Campo obrigatório

Endereço - Texto

Limite de 200 caracteres

Campo obrigatório

Cidade - Texto

Limite de 28 caracteres

Campo obrigatório

Estado - ComboBox

Todos os estados do Brasil

Utilize estruturas de repetição via JavaScript para gerar os <option>

Campo obrigatório

Tipo - Radio Button

Casa, Apartamento

Campo obrigatório

Crie outro <fieldset> para dados do seu último emprego

Resumo do currículo - TextArea

Limite de 1000 caracteres

Campo obrigatório

Cargo - Texto

Limite de 40 caracteres

Campo obrigatório

Descrição do cargo - Texto

Limite de 500 caracteres

Campo obrigatório

Data de início - Texto

Verificar o formato da data dd/mm/aaaa.

O dia deve ser > 0 e <= 31.

O mês deve ser > 0 e <= 12.

O ano não pode ser negativo.

Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.

Campo obrigatório

Logo abaixo do formulário, crie um botão que:

Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault().

Execute as validações que foram pedidas ao longo da montagem do formulário.

Monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
```

#### Comments

Pretty standard form construction, with an observation to the regex checks made to validate the data input.

###### Feedback

As always, any feedback or suggestion is welcomed.
