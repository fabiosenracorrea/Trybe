## Project 01 - React Testing Library

The first project of Trybe's 15th module, centered around JEST testing on React, using the officially recommended RTL - React Testing Library.

### What was proposed here

As a literal copy/paste of the instructions:
---

## Requisitos do projeto

### 1. Testando o arquivo App.js

  - Teste se a página principal da Pokédex é renderizada ao carregar a aplicação no caminho de URL `/`.

  - Teste se o topo da aplicação contém um conjunto fixo de links de navegação

    - O primeiro link deve possuir o texto `Home` com a URL `/`;

    - O segundo link deve possuir o texto `About` com a URL `/about`;

    - O terceiro link deve possuir o texto `Favorite Pokémons` com a URL `/favorites`.

  - Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação.

  - Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação.

  - Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação.

  - Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

### 2. Testando o arquivo About.js

  - Teste se a página contém as informações sobre a Pokédex.

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`;

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex;

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

### 3. Testando o arquivo FavoritePokemons.js

  - Teste se é exibido na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos.

  - Teste se é exibido todos os cards de pokémons favoritados.

  - Teste se **Não** é exibido nenhum card de pokémon não favoritado.

### 4. Testando o arquivo NotFound.js

  - Teste se página contém um heading `h2` com o texto `Page requested not found 😭`;

  - Teste se página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

### 5. Testando o arquivo Pokedex.js

  - Teste se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado.

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão.

    - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão se estiver no último Pokémon da lista.

  - Teste se é mostrado apenas um Pokémon por vez.

  - Teste se a Pokédex tem os botões de filtro

    - Os Pokémons do tipo selecionado através do `botão de tipo` devem estar circulados.

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`.

  - Teste se a Pokédex contém um botão para resetar o filtro

    - O texto do botão deve ser `All`.

    - A Pokedéx deverá voltar a circular por todos os Pokémons quando o botão for clicado.

    - Ao carregar a página, o filtro selecionado deverá ser `All`.

  - Teste se é criado, dinamicamente, um botão de filtro para cada tipo de Pokémon.

    - Os botões de filtragem devem ser dinâmicos.

    - Deve existir um botão de filtragem para cada tipo de Pokémon disponível nos dados, independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, a sua Pokédex deve possuir pokémons do tipo `Fire`, `Psychic`, `Electric` e `Normal`.

    - Deve ser mostrado como opção de filtro, um botão para cada um dos tipos. Além disso, o botão `All` precisa estar sempre visível.

  - O botão de `Próximo pokémon` deve ser desabilitado quando a lista filtrada de Pokémons tiver um só pokémon.

### 6. Testando o arquivo Pokemon.js

  - Teste se é renderizado um card com as informações de determinado pokémon.

    - O nome correto do Pokémon deve ser mostrado na tela.

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida.

    - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.

  - Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do Pokémon exibido;

  - Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.

  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;

  - Teste se existe um ícone de estrela nos Pokémons favoritados.

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do Pokémon exibido.

### 7. Testando o arquivo PokemonDetails.js

  - Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela.

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do Pokémon;

    - **Não** deve existir o link de navegação para os detalhes do Pokémon selecionado.

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`.

    - A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.

  - Teste se existe na página uma seção com os mapas contendo as localizações do pokémon

    - Deverá conter, na seção de detalhes, um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do Pokémon exibido.

    - Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos, o nome da localização e uma imagem do mapa em cada localização.

    - A imagem da localização deve ter um atributo `src` com a URL da localização.

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do Pokémon.

  - Teste se o usuário pode favoritar um pokémon através da página de detalhes

    - A página deve exibir um checkbox que permite favoritar o Pokémon.
    - Cliques alternados no checkbox devem adicionar e remover o Pokémon da lista de favoritos.

    - O label do checkbox deve conter o texto `Pokémon favoritado?`.

---

### Grade

This project got a **100%/100%** grade and can be checkout entirely on [here](https://github.com/tryber/sd-06-project-react-testing-library/pull/52).


#### Comments

As previously discussed on various modules, testing is crucial on any application nowadays. Testing user interaction and component rendering efficiently can reduce your debugging time by a large amount, while also giving confidence about the whole performance of the app.

Because it's not a simple unitary test (like those done in separate functions), these tests require knowledge about the expected behavior and content displayed to be fully effective. Moreover, it's still important to create independent tests as much as you can. Don't be afraid of creating fake functions and props to test exactly what you need to test.

As a highlight of the project, i'd like to point out to this loop logic to test whether a on/off favorite switch was working properly, using a 'range-like' strategy to iterate n-times to accomplish it.

```jsx
  it('alternative clicks should add/remove from favorites', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByRole, queryByAltText, rerender } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ fakeUpdateFavorites }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const ALTERNATIVE_ROUNDS = 4;

    const roundsController = [...new Array(ALTERNATIVE_ROUNDS)];

    roundsController.forEach((_, index) => {
      const favoriteCheckBox = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
      fireEvent.click(favoriteCheckBox);

      rerender(
        <Router history={ history }>
          <PokemonDetails
            pokemons={ testPokemon }
            onUpdateFavoritePokemons={ fakeUpdateFavorites }
            isPokemonFavoriteById={ favoritePokemon }
            match={ fakeMatch }
          />
        </Router>,
      );

      const DIVISOR = 2;
      const EVEN = 0;

      const altFormat = new RegExp(
        `^${pokemonRendered.name} is marked as favorite$`, 'i',
      );
      const favoriteStarElement = queryByAltText(altFormat);

      if (index % DIVISOR === EVEN) {
        expect(favoriteStarElement).toBeInTheDocument();
      } else {
        expect(favoriteStarElement).toBeNull();
      }
    });
  });
```

###### Feedback

As always, any feedback or suggestion is welcomed.
