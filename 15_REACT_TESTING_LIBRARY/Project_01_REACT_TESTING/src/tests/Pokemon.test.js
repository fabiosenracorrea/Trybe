import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';
import Pokemon from '../components/Pokemon';

const testPokemon = {
  id: 151,
  name: 'Mew',
  type: 'Psychic',
  averageWeight: {
    value: '4.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Faraway Island',
      map: 'https://cdn.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png',
    },
  ],
  summary: 'Appare have a strong desire to see it.',
};

describe('Pokemon.jsx testing', () => {
  it('should render with correct name, src/alt and weight', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Pokemon
          isFavorite={ false }
          pokemon={ testPokemon }
        />
      </MemoryRouter>,
    );

    const correctName = new RegExp(`^${testPokemon.name}$`, 'i');
    const correctNameElement = getByText(correctName);

    expect(correctNameElement).toBeInTheDocument();

    const { averageWeight: { measurementUnit, value } } = testPokemon;
    const weightFormat = new RegExp(`^Average Weight: ${value} ${measurementUnit}$`, 'i');
    const weightFormatElement = getByText(weightFormat);

    expect(weightFormatElement).toBeInTheDocument();

    const altFormat = new RegExp(`^${testPokemon.name} sprite$`, 'i');
    const pokemonImage = getByAltText(altFormat);

    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage.src).toBe(testPokemon.image);
  });

  it('should show details link if flag is not set to false', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={ history }>
        <Pokemon
          isFavorite={ false }
          pokemon={ testPokemon }
        />
      </Router>,
    );

    const detailsLink = getByText(/more\sdetails/i);
    expect(detailsLink).toBeInTheDocument();

    fireEvent.click(detailsLink);

    const { pathname } = history.location;

    const expectedPath = `/pokemons/${testPokemon.id}`;

    expect(pathname).toBe(expectedPath);
  });

  it('should have a star icon if favorited', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Pokemon
          pokemon={ testPokemon }
          isFavorite
        />
      </MemoryRouter>,
    );

    const altFormat = new RegExp(`^${testPokemon.name} is marked as favorite$`, 'i');
    const favoriteStarElement = getByAltText(altFormat);

    expect(favoriteStarElement).toBeInTheDocument();
    expect(favoriteStarElement.src).toBe('http://localhost/star-icon.svg');
  });
});
