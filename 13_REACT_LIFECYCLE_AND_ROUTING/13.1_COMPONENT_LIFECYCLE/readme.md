## 13.1 - React Components Lifecycle

Because of how powerful React components are, they have stages in which they cycle through. And each stage has a different function and handler to better apply everything the component need to perform accordingly.

On this lesson, the basic methods of managing these stages are covered:

- constructor 
- render 
- componentDidMount 
- shouldComponentUpdate 
- componentDidUpdate 
- componentWillUmount

----
#### Exercises

##### Exercício 1

Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Use a dog.ceo. Para refrescar a memória acerca de como fazer requisições, revisite o conteúdo sobre Promises ou consulte a documentação!

Observe a estrutura de dados que a API retorna:

```json
{
  "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
  "status": "success"
}
```

Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;

Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;

Deve existir um botão que, para cada clique, busque mais um doguinho.

##### Exercício 2

Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

A cada tentativa de atualização do componente, verifique se o campo message tem a palavra terrier. Se sim, não atualize o componente. Pesquise pelo método includes;

Após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);

##### Bônus

Com o código do ultimo exercício, implemente:

A cada foto que for baixada, através de um input, permita que quem usa dê um nome ao doguinho;

Crie um botão que guarde o resultado, juntamente com o nome dado ao 'doguinho', em um array;

Guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;

A cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exiba a última imagem guardada.
----

#### Comments

Creating a React component with the correct structure of calls and references can heavily impact (for the best or the worst) the Application's performance.

Placing everything in the right place is the first step of creating a great React SPA!

###### Feedback

As always, any feedback or suggestion is welcomed.
