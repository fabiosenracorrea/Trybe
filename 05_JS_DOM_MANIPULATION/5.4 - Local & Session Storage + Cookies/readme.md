## 5.4 - Local Storage/Session Storage/Cookies

Here we learned the difference between Local/Sessions Storages and Cookies.

How to create, modify and delete data stored with each method.

#### The exercise here was as described:

```Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.

Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.

Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.

As pessoas devem ter o poder de alterar:

Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
```

#### Comments

The responsivity of the page was not properly set, although it was designed mostly with relative units (which is recommended to ease up any responsivity task). Because of it, the page works 100% correctly as intended and designed until window width hits ~485px, in which header's inputs lose alignment.

As an extra, i added default values to each property that can be changed by the user, in case the local storage is deleted. Each property set by the user gets saved as the default input/select value, so the user knows which preference was set on the previous access.

RGB inputs are properly capped between [0-255] on both visual and storage aspects

###### Feedback

As always, any feedback or suggestion is welcomed.
