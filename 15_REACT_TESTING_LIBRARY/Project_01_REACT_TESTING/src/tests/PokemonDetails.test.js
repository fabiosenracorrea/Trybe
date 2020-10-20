import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';
import PokemonDetails from '../components/PokemonDetails';

import { updateFavoritePokemons } from '../services/pokedexService';

const testPokemon = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary: 'This girl loves to eat.',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://cdn.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://cdn.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://cdn.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
      },
      {
        location: 'Kanto Rock Tunnel',
        map: 'https://cdn.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
      },
    ],
    summary: 'The flaakly.',
  },
  {
    id: 10,
    name: 'Caterpie',
    type: 'Bug',
    averageWeight: {
      value: '2.9',
      measurementUnit: 'kg',
    },
    image: 'https://cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 30',
        map: 'https://cdn.bulbagarden.net/upload/7/76/Johto_Route_30_Map.png',
      },
      {
        location: 'Johto Route 31',
        map: 'https://cdn.bulbagarden.net/upload/2/2b/Johto_Route_31_Map.png',
      },
      {
        location: 'Ilex Forest',
        map: 'https://cdn.bulbagarden.net/upload/a/ae/Johto_Ilex_Forest_Map.png',
      },
      {
        location: 'Johto National Park',
        map: 'https://cdn.bulbagarden.net/upload/4/4e/Johto_National_Park_Map.png',
      },
    ],
    summary: 'For nemies.',
  },
];

const favoritePokemon = {
  25: false,
  4: false,
  10: false,
};

const pokemonID = 25;

const pokemonRendered = testPokemon.find((pokemon) => pokemon.id === pokemonID);

const fakeMatch = {
  params: {
    id: String(pokemonID),
  },
};

function fakeUpdateFavorites(pkmID, checked) {
  updateFavoritePokemons(pkmID, checked);

  favoritePokemon[pkmID] = checked;
}

describe('PokemonDetails.jsx testing detailed info showed on screen', () => {
  it('should have pokemons name + details on screen', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const patternWanted = new RegExp(`${pokemonRendered.name} details`, 'i');
    const displayedText = getByText(patternWanted);

    expect(displayedText).toBeInTheDocument();
  });

  it('should NOT render pokemon details link', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { queryByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const moreDetailsLink = queryByText(/more\sdetails/i);

    expect(moreDetailsLink).not.toBeInTheDocument();
  });

  it('should have a summary section using H2 tag', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const summaryElement = getByText(/summary/i);

    expect(summaryElement).toBeInTheDocument();
    expect(summaryElement.tagName).toBe('H2');
  });

  it('should have a paragraph with specific pokemon details', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const summaryElement = getByText(pokemonRendered.summary);

    expect(summaryElement).toBeInTheDocument();
    expect(summaryElement.tagName).toBe('P');
  });
});

describe('PokemonDetails.jsx testing map section', () => {
  it('should have a H2 heading indicating pokemons locations', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const patternWanted = new RegExp(`^Game Locations of ${pokemonRendered.name}$`, 'i');
    const displayedText = getByText(patternWanted);

    expect(displayedText).toBeInTheDocument();
    expect(displayedText.tagName).toBe('H2');
  });

  it('should show all pokemon locations, each having its name and image', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText, getAllByAltText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ () => {} }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    pokemonRendered.foundAt.forEach((place) => {
      const locationOnScreen = getByText(place.location);

      expect(locationOnScreen).toBeInTheDocument();

      const altPattern = new RegExp(`^${pokemonRendered.name} location$`, 'i');
      const locationImages = getAllByAltText(altPattern);

      expect(locationImages.length).toBe(pokemonRendered.foundAt.length);

      const imageIsRendered = locationImages.some((image) => image.src === place.map);
      expect(imageIsRendered).toBeTruthy();
    });
  });
});

describe('PokemonDetails.jsx user favorite interaction', () => {
  it('should have a checkbox to trigger favorite status', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByRole, getByAltText, rerender } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ fakeUpdateFavorites }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

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

    const altFormat = new RegExp(`^${pokemonRendered.name} is marked as favorite$`, 'i');
    const favoriteStarElement = getByAltText(altFormat);

    expect(favoriteStarElement).toBeInTheDocument();

    fireEvent.click(favoriteCheckBox); // reseting status of favorite
  });

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
        expect(favoriteStarElement).not.toBeInTheDocument();
      }
    });
  });

  it('should have specific label text', () => {
    const history = createMemoryHistory();

    history.push(`pokemons/${pokemonID}`);

    const { getByText } = render(
      <Router history={ history }>
        <PokemonDetails
          pokemons={ testPokemon }
          onUpdateFavoritePokemons={ fakeUpdateFavorites }
          isPokemonFavoriteById={ favoritePokemon }
          match={ fakeMatch }
        />
      </Router>,
    );

    const favoriteCheckBox = getByText(/pokémon\sfavoritado\?/i);

    expect(favoriteCheckBox).toBeInTheDocument();
    expect(favoriteCheckBox.tagName).toBe('LABEL');
  });
});
