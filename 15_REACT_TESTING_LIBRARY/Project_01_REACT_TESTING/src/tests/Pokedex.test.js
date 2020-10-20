import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Pokedex from '../components/Pokedex';

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
    summary: 'This gh to eat.',
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

const testTypes = testPokemon.reduce((types, pokemon) => [...types, pokemon.type], []);

const favorited = {
  25: false,
  4: false,
  10: false,
};

const extraPokemon = {
  id: 23,
  name: 'Ekans',
  type: 'Poison',
  averageWeight: {
    value: '6.9',
    measurementUnit: 'kg',
  },
  image: 'https://cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Goldenrod Game Corner',
      map: 'https://cdn.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png',
    },
  ],
  summary: 'It come too heavy to move, however.',
};

describe('Pokedex.jsx testing', () => {
  it('should cycle through the list', () => {
    const { queryByText, getByText } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ testPokemon }
        />
      </MemoryRouter>,
    );

    testPokemon.forEach((pokemon) => {
      const pokemonName = queryByText(pokemon.name);
      expect(pokemonName).toBeInTheDocument();

      const nextPokemonBtn = getByText(/próximo\spokémon/i);
      fireEvent.click(nextPokemonBtn);

      const firstPokemonCycled = queryByText(pokemon.name);
      expect(firstPokemonCycled).toBeNull();
    });

    // checking if cycle starts again
    const firstPokemonAgain = queryByText(testPokemon[0].name);
    expect(firstPokemonAgain).toBeInTheDocument();
  });

  it('should be able to filter by any type present', () => {
    const { queryAllByTestId } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ testPokemon }
        />
      </MemoryRouter>,
    );

    const filterButtons = queryAllByTestId('pokemon-type-button');

    filterButtons.forEach((button) => {
      const buttonText = button.innerHTML;
      expect(testTypes.includes(buttonText)).toBeTruthy();
    });

    // combined with forEach guarantees every type has a button
    expect(filterButtons.length).toBe(testTypes.length);
  });

  it('should dynamically generate filter buttons', () => {
    // this test is complements the above one.

    const changedPokemon = [...testPokemon, extraPokemon];

    const { queryAllByTestId } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ changedPokemon }
        />
      </MemoryRouter>,
    );

    const newTestTypes = changedPokemon.reduce(
      (types, pokemon) => [...types, pokemon.type], [],
    );

    const filterButtons = queryAllByTestId('pokemon-type-button');

    filterButtons.forEach((button) => {
      const buttonText = button.innerHTML;
      expect(newTestTypes.includes(buttonText)).toBeTruthy();
    });

    expect(filterButtons.length).toBe(newTestTypes.length);
  });

  it('should have a reset filter button', () => {
    const { queryByText, getByText, queryAllByTestId } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ testPokemon }
        />
      </MemoryRouter>,
    );

    const allButton = queryByText(/all/i);
    expect(allButton).toBeInTheDocument();

    fireEvent.click(queryAllByTestId('pokemon-type-button')[0]);

    const nextPokemonBtn = getByText(/próximo\spokémon/i);
    expect(nextPokemonBtn).toBeDisabled();

    fireEvent.click(allButton);

    const nextPokemonAgain = getByText(/próximo\spokémon/i);
    expect(nextPokemonAgain).toBeEnabled();

    // cycle - means the reset button reset to initial conditions
    testPokemon.forEach((pokemon) => {
      const pokemonName = queryByText(pokemon.name);
      expect(pokemonName).toBeInTheDocument();
      fireEvent.click(nextPokemonAgain);
    });

    const firstPokemon = queryByText(testPokemon[0].name);
    expect(firstPokemon).toBeInTheDocument();
  });

  it('should always show reset-button', () => {
    const { queryByText, queryAllByTestId } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ testPokemon }
        />
      </MemoryRouter>,
    );

    const allButton = queryByText(/all/i);
    expect(allButton).toBeInTheDocument();

    const filterButtons = queryAllByTestId('pokemon-type-button');

    filterButtons.forEach((filter) => {
      fireEvent.click(filter);
      const resetButton = queryByText(/all/i);
      expect(resetButton).toBeInTheDocument();
    });
  });

  it('should disable next button when theres only 1 pokemon', () => {
    const singlePokemonArray = [testPokemon[0]];

    const { getByText } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ singlePokemonArray }
        />
      </MemoryRouter>,
    );

    const nextPokemonBtn = getByText(/próximo\spokémon/i);
    expect(nextPokemonBtn).toBeDisabled();
  });

  it('should have specific title', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <Pokedex
          isPokemonFavoriteById={ favorited }
          pokemons={ testPokemon }
        />
      </MemoryRouter>,
    );

    const nextPokemonBtn = queryByText(/encountered\spokémon/i);
    expect(nextPokemonBtn).toBeInTheDocument();
    expect(nextPokemonBtn.tagName).toBe('H2');
  });
});
