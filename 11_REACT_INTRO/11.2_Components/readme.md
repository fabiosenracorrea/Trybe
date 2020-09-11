## 12.2 - Components!

### What was covered here?

After understanding the basic syntax of React, now it's time to learn a little more about **components**.

Components are a way of repeating code/structure across our application. The best example to illustrate that is a header. When creating an application, it's probable that you are going to have a basic header on all of your pages. If you build them with vanila HTML/CSS/JS, chances are you are going to copy+paste the header structure on all of those pages.

When using React, we can abstract that header structure away in a component called `Header` (or whatever we want) and simply add it to any page we want, using a syntax like

```jsx
function onePage() { //this is another component!
  return (
    <>
      <Header />
      {/*...other html/components...*/}
    </>
  )
}
```

### Exercises on this lesson

The goal here is to use some Pokemon data to create an Pokedex-like page to show them. [check it out](./my-pokedex)

```
Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon, a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.

Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você implemente pelo menos estes dois componentes:

Pokemon: como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

nome do pokemon;

tipo do pokemon;

peso médio do pokemon, acompanhado da unidade de medida usada;

imagem do pokemon.

Pokedex: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.
```

#### Comments

The fact that we can re-use code and structures abstracted away across our application so easily makes React a very interesting framework

###### Feedback

As always, any feedback or suggestion is welcomed.