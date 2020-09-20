## Project 01 - Stateful Movie Library

**Important:** This is the second part of a *3-part* series of project involving the theme "Movie Library".

You can check part one [here](../../11_REACT_INTRO/Project_01_Movie_Library)

### What was proposed here

As a literal copy/paste of the instructions:


## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando por **todos os _checks_** do **CodeClimate**. Use o _check_ do **TravisCI** para medir o seu progresso em relação aos requisitos! 😉

#### Crie um componente chamado `SearchBar`

Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente `MovieList` dependerá dos filtros escolhidos. `SearchBar` deve receber como props:

  - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback

O que será validado:
  - Será validado se o componente `SearchBar` renderiza com sucesso




#### Renderize um formulário dentro de `SearchBar`

Dentro desse formulário haverá campos usados na filtragem de cartões.

- Esse formulário deve apresentar o atributo `data-testid="search-bar-form"`

O que será validado:
  - Será validado se é renderizado 1, e apenas 1, form dentro de `SearchBar` com sucesso


#### Renderize um input do tipo texto dentro do formulário em `SearchBar`

- O input deve ter uma label associada com o texto: **"Inclui o texto:"**;

- Essa label deve apresentar o atributo `data-testid="text-input-label"`

- A propriedade `value` do input deve receber o valor da prop `searchText`;

- A propriedade `onChange` do input deve receber o valor da prop `onSearchTextChange`.

- Esse input deve apresentar o atributo `data-testid="text-input"`

O que será validado:
  - Será validado que 1, e apenas 1, input de texto é renderizado dentro do forms
  - Será validado que o input de texto contém a label "Inclui o texto"
  - Será validado se o input de texto tem o valor passado pela props `searchText`
  - Será validado que a props `onSearchTextChange` é passada para o atributo `onChange` do input


#### Renderize um input do tipo checkbox dentro do formulário em `SearchBar`

- O input deve ter uma label associada com o texto: **"Mostrar somente favoritos"**;

- Essa label deve apresentar o atributo `data-testid="checkbox-input-label"`

- A propriedade `checked` do input deve receber o valor da prop `bookmarkedOnly`;

- A propriedade `onChange` do input deve receber o valor da prop `onBookmarkedChange`.

- Esse input deve apresentar o atributo `data-testid="checkbox-input"`

O que será validado:
  - Será validado se uma checkbox é renderizada dentro do form
  - Será validado que o checkbox tem a label "Mostrar somente favoritos"
  - Será validado que a prop `bookmarkedOnly` é passada para o atributo `checked` do input
  - Será validado que a prop `onBookmarkedChange` é passada para o atributo `onChange` do input


#### Renderize um select dentro do formulário em `SearchBar`

- O select deve ter uma label associada com o texto: **"Filtrar por gênero"**;

- Essa label deve apresentar o atributo `data-testid="select-input-label"`

- A propriedade `value` do select deve receber o valor da prop `selectedGenre`;

- A propriedade `onChange` do input deve receber o valor da prop `onSelectedGenreChange`;

- O `select` deve renderizar quatro tags `option`, com as opções de filtragem por gênero, na seguinte ordem:
   - `Todos`, com o valor `""`;
   - `Ação`, com o valor `action`;
   - `Comédia`, com o valor `comedy`;
   - `Suspense`, com o valor `thriller`.

- O select deve apresentar o atributo `data-testid="select-input"`

- Cada `option` deve apresentar o atributo `data-testid="select-option"`

O que será validado:
  - Será validado que um select é renderizado dentro do form
  - Será validado se o componente tem uma label com o texto "Filtrar por gênero"
  - Será validado se a prop `selectedGenre` é passada como valor do select
  - Será validado se a prop `onSelectedGenreChange` é passada para o atributo `onChange` do select
  - Será validado se são renderizadas 4 options dentro do select com os textos e valores, respectivamente: Todos e \'\', Ação e action, Comédia e comedy, Suspense e thriller

#### Crie um componente chamado `AddMovie`

Esse componente renderizará um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:

  - subtítulo
  - título
  - caminho da imagem
  - sinopse
  - avaliação
  - gênero

`AddMovie` deve receber como props:

  - `onClick`, uma callback

O que será validado:
  - Será validado se o componente renderiza
  - Será validado se o componente renderiza 1, e apenas 1, form

#### Configure o estado inicial do componente `AddMovie`

O componente `AddMovie` possui como estado as seguintes propriedades:

  - `subtitle`: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
  - `title`: guarda o título preenchido no formulário por quem usa a aplicação;
  - `imagePath`: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
  - `storyline`: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
  - `rating`: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
  - `genre`: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.

Ou seja, o estado de `AddMovie` contém as informações do novo filme que foram inseridas por quem usa a aplicação.

O estado inicial do componente `AddMovie` deve ser:

  - `subtitle`: '';
  - `title`: '';
  - `imagePath`: '';
  - `storyline`: '';
  - `rating`: 0;
  - `genre`: 'action'.


#### Renderize um formulário dentro de `AddMovie`

Dentro desse formulário haverá campos usados para preencher informações do novo cartão a ser adicionado na biblioteca.


#### Renderize um input do tipo texto dentro do formulário em `AddMovie` para obter o título do novo filme

- O input deve ter uma label associada com o texto: **"Título"**;

- Essa label deve apresentar o atributo `data-testid="title-input-label"`

- O input deve ter seu valor inicial provido pelo estado inicial do componente, via `title`;

- Esse input deve apresentar o atributo `data-testid="title-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `title` o atual título contido no input.

O que será validado:
  - Será validado se o componente renderiza um input de texto para quem usa escrever o titulo do filme
  - Será validado se o componente renderiza a label "Título" para o input de titulo
  - Será validado se o estado inicial do titulo é "", ou seja, uma string vazia
  - Será validado se o valor do input de título muda quando algo é digitado por quem usa.



#### Renderize um input do tipo texto dentro do formulário em `AddMovie` para obter o subtítulo do novo filme

- O input deve ter uma label associada com o texto: **"Subtítulo"**;

- Essa label deve apresentar o atributo `data-testid="subtitle-input-label"`

- O input deve ter seu valor inicial provido pelo estado inicial do componente, via `subtitle`;

- Esse input deve apresentar o atributo `data-testid="subtitle-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `subtitle` o atual subtítulo contido no input.

O que será validado:
  - Será validado se o componentee renderiza um input de texto para quem usa escrever o subtítulo do filme
  - Será validado se o component renderiza a label "Subtítulo" para o input de subtitulo
  - Será validado se o estado inicial do subtitulo é "", ou seja, uma string vazia
  - Será validado se o valor do input de subtitulo muda quando algo é digitado pelo usuário


#### Renderize um input do tipo texto dentro do formulário em `AddMovie` para obter o caminho da imagem do novo filme

- O input deve ter uma label associada com o texto: **"Imagem"**;

- Essa label deve apresentar o atributo `data-testid="image-input-label"`

- O input deve ter seu valor inicial provido pelo estado inicial do componente, via `imagePath`;

- Esse input deve apresentar o atributo `data-testid="image-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `imagePath` o atual caminho da imagem contido no input.

O que será validado:
  - Será validado se o componente renderiza um input de texto para quem usa inserir a url da imagem do filme
  - Será validado se o componente renderiza a label "Imagem" para o input de imagem
  - Será validado se o estado inicial do input de imagem é "", ou seja, uma string vazia
  - Será validado se o valor do input de imagem muda quando algo é digitado por quem usa


#### Renderize uma `textarea` dentro do formulário em `AddMovie` para obter a sinopse do novo filme

- A `textarea` deve ter uma label associada com o texto: **"Sinopse"**;

- Essa label deve apresentar o atributo `data-testid="storyline-input-label"`

- A `textarea` deve ter seu valor inicial provido pelo estado inicial do componente, via `storyline`;

- Essa `textarea` deve apresentar o atributo `data-testid="storyline-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `storyline` a sinopse atual continda na `textarea`.

O que será validado:
  - Será validado se o componente renderiza um input de texto para quem usa escrever a sinopse do filme
  - Será validado se o componente renderiza a label "Sinopse" para o input de sinopse
  - Será validado se o estado inicial do input de sinopse é "", ou seja, uma string vazia
  - Será validado se o valor do input de sinopse muda quando algo é digitado por quem usa


#### Renderize um `input` do tipo `number` dentro do formulário em `AddMovie` para obter a avaliação do novo filme

- O `input` deve ter uma label associada com o texto: **"Avaliação"**;

- Essa label deve apresentar o atributo `data-testid="rating-input-label"`

- O `input` deve ter seu valor inicial provido pelo estado inicial do componente, via `rating`;

- Essa `textarea` deve apresentar o atributo `data-testid="rating-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `rating` a avaliação atual continda no input.

O que será validado:
  - Será validado se o componente renderiza um input de texto para quem usa escrever a avaliação do filme
  - Será validado se o componente renderiza a label "Avaliação" para o input de avaliação
  - Será validado se o estado inicial do input de avaliação é 0
  - Será validado se o valor do input de avaliação muda quando algo é digitado por quem usa


#### Renderize um `select` do formulário em `AddMovie` para selecionar o gênero do novo filme

- O `select` deve ter uma label associada com o texto: **"Gênero"**;

- Essa label deve apresentar o atributo `data-testid="genre-input-label"`

- O `select` deve ter seu valor inicial provido pelo estado inicial do componente, via `genre`;

- Essa `textarea` deve apresentar o atributo `data-testid="genre-input"`

- A propriedade `onChange` deve atualizar o estado de `AddMovie`, atribuindo a `genre` o gênero atual selecionado;

- O `select` deve renderizar três tags `option`, com as opções de filtragem por gênero, na seguinte ordem:
   - `Ação`, com o valor `action`;
   - `Comédia`, com o valor `comedy`;
   - `Suspense`, com o valor `thriller`.

- Cada `option` deve conter o atributo `data-testid="genre-option"`

O que será validado:
  - Será validado se o componente renderiza um select com 3 opções de genero de filme
  - Será validado se o componente renderiza a label "Gênero" para o select de gênero
  - Será validado se todas as opções no select tem o texto e o valor esperados, que são, respectivamente: Ação e action, Comédia e comedy, Suspense e thriller
  - Será validado se o gênero selecionado inicialmente é o "action"
  - Será validado se o valor do gênero muda quando um gênero diferente é escolhido no select


#### Renderize um botão do formulário em `AddMovie` para fazer uso dos dados do novo filme, contidos no estado de `AddMovie`

- O botão precisa ter escrito o seguinte texto: **"Adicionar filme"**;

- O botão deve conter o atributo `data-testid="send-button"`

- A propriedade `onClick` do botão invoca uma função definida por você, em `AddMovie`, que:
  - Executa a callback passada para o componente `AddMovie` via props, chamada `onClick`, que recebe como parâmetro o estado atual de `AddMovie`;
  - Reseta o estado de `AddMovie`, voltando para o inicial, conforme mencionado anteriormente.

O que será validado:
  - Será validado se o texto do botão é "Adicionar filme"
  - Será validado se o evento onClick é chamado ao se clicar no botão.
  - Será validado se o estado dos inputs volta ao inicial depois que o botão de adicionar é clicado.

#### Crie um componente chamado `MovieLibrary`

Esse componente renderizará a biblioteca de filmes que renderizará a `searchBar` e o `addMovies` para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

`MovieLibrary` deve receber como props:

  - `movies`, um array

O que será validado:
  - Será validado se o componente é renderizado com sucesso


#### Configure o estado inicial do componente `MovieLibray`

O componente `MovieLibrary` possui como estado as seguintes propriedades:

  - `searchText`: guarda o texto de busca por filmes;
  - `bookmarkedOnly`: um _boolean_ que guarda se é para filtrar por filmes favoritados ou não;
  - `selectedGenre`: guarda o gênero do filme selecionado para poder fazer a filtragem;
  - `movies`: guarda a lista de filmes.

Ou seja, o estado de `MovieLibrary` contém a lista de filmes e os filtros a serem aplicados sobre a listagem.

O estado inicial do componente `MovieLibrary` deve ser:

  - `searchText`: '';
  - `bookmarkedOnly`: false;
  - `selectedGenre`: '';
  - `movies`: a lista de filmes passadas pela props `movies`.

O que será validado:
  - Será validado se o `searchText` é inicializado com uma string vazia
  - Será validado se o `bookmarkedOnly` é inicializado com o boleano `falso`
  - Será validado se o `selectedGenre` é inicializado com uma string vazia
  - Será validado se o todos os `movies` são renderezidados.


#### Renderize `SearchBar` dentro de `MovieLibrary`

- `searchText` oriundo do estado de `MovieLibrary` deve ser passado para a prop `searchText` de `SearchBar`;

- A callback para atualizar o estado de `MovieLibrary` em `searchText` precisa ser passada para `SearchBar`;

- `bookmarkedOnly` oriundo do estado de `MovieLibrary` deve ser passado para a prop `bookmarkedOnly` de `SearchBar`;

- A callback para atualizar o estado de `MovieLibrary` em `bookmarkedOnly` precisa ser passada para `SearchBar`;

- `selectedGenre` oriundo do estado de `MovieLibrary` deve ser passado para a prop `selectedGenre` de `SearchBar`;

- A callback para atualizar o estado de `MovieLibrary` em `selectedGenre` precisa ser passada para `SearchBar`.

O que será validado:
  - Será validado se um componente `SearchBar` é renderizado
  - Será validado se o estado da `SearchBar` muda quando quem usa digita algo
  - Será validado que é possivel selecionar a opção de filtrar por favoritos`
  - Será validado que é possivel escolher uma categoria uma categoria de filme para filtrar


#### Renderize `MovieList` dentro de `MovieLibrary`

- Deve passar para a prop `movies` de `MovieList` todos os filmes filtrados;

- Quando o estado para `bookmarkedOnly` é falso, não é alterada a listagem de filmes a ser renderizada;

- Quando o estado para `bookmarkedOnly` é verdadeiro, deve ser renderizado por `MovieList` somente filmes favoritados;

- Quando o estado para `selectedGenre` é vazio, não é alterada a listagem de filmes a ser renderizada;

- Quando o estado para `selectedGenre` não é vazio, deve ser renderizado somente filmes com o mesmo gênero;

- Quando o estado para `searchText` é vazio, não é alterada a listagem de filmes a ser renderizada;

- Quando o estado para `searchText` não é vazio, deve ser renderizado por `MovieList` filmes que satisfaçam a uma das condições abaixo:
  - Filmes cujo título contém o que está presente em `searchText`, **ou**;
  - Filmes cujo subtítulo contém o que está presente em `searchText`, **ou**;
  - Filmes cuja sinopse contém o que está presente em` searchText`.

O que será validado:
  - Será validado que o componente `MovieList` é renderizado com sucesso
  - Será validado se a barra de buscas filtra os filmes por titulo
  - Será validado se a barra de buscas filtra os filmes por subtítulo
  - Será validado se a barra de buscas filtra os filmes por sinopse
  - Será validado se a lista de filmes é renderizada sem filtragens se a barra de buscar estiver vazia
  - Será validado que é possivel filtrar por favoritos
  - Será validado que é possivel filtrar por categoria


#### Renderize `AddMovie` dentro de `MovieLibrary`

- A callback que permite adicionar um novo filme ao final da lista precisa ser passada para `AddMovie`.

O que será validado:
  - Será validado se o componente `AddMovie` é renderizado com sucesso
  - Será validado se é possível adicionar um novo filme a lista de filmes

#### Adicione proptypes a todos os componentes

Todos os compontens que recebem props devem ter suas proptypes corretamente declaradas. O eslint checa automaticamente declaração de proptypes, portanto seu Pull Request deverá passar no Code Climate para satisfazer esse requisito.


---

### Grade

This project got a **100%/100%** grade and can be checked out entirely on [here](https://github.com/tryber/sd-06-project-movie-card-library-stateful/pull/90).


#### Comments

As a challenge for the student, he decided to do this project using the *class syntax*, which, after React 16.8, are a lot more verbose than simple *functional components*.

As a highlight for the project, the filtering logic created in order for all the 3 types of filters (favorites only or all, genre and text-inclusion) work together, as well as accounting for the asynchronous state saving characteristic, we ended up with this callback function, called on *setState*:

```jsx
  handleFiltering() {
    const { baseMovies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    let filteredMovies = baseMovies;

    filteredMovies = filteredMovies.filter((movie) => (
      bookmarkedOnly ? (movie.bookmarked === bookmarkedOnly) : true
    ));

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      const pattern = new RegExp(searchText, 'i');

      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.match(pattern)
          || movie.subtitle.match(pattern)
          || movie.storyline.match(pattern)
      ));
    }

    this.setState({ movies: filteredMovies });
  }
```

Because there could be different states responsible for filtering ALL movies, it was decided that applying 3 instances of pretty straight forward '.filter' calls would be the cleanest way to achieve this goal. Any particular feedback on this logic would be awesome, tho.

###### Feedback

As always, any feedback or suggestion is welcomed.