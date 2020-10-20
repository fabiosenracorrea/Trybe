import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('FavoritePokemon.jsx addition', () => {
  it('should display no favorite pokemon if none is previously selected', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <FavoritePokemons />
      </MemoryRouter>,
    );

    const noFavoriteMessage = new RegExp('no favorite pokemon found', 'i');
    const noFavoritesElement = queryByText(noFavoriteMessage);

    expect(noFavoritesElement).toBeInTheDocument();
  });

  it('should list all favorite pokemon', () => {
    const { getByText, getByTestId, getByRole, getAllByText, queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const firstPokemonName = getByTestId('pokemon-name').innerHTML;

    const firstPokemonDetails = getByText(/more\sdetails/i);
    fireEvent.click(firstPokemonDetails);

    const favoriteCheckBox = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
    fireEvent.click(favoriteCheckBox);

    fireEvent.click(getByText(/home/i));

    while (getByTestId('pokemon-name').innerHTML === firstPokemonName) {
      const nextPokemonBtn = getByText(/próximo\spokémon/i);
      fireEvent.click(nextPokemonBtn);
    }

    const secondPokemonName = getByTestId('pokemon-name').innerHTML;

    const secondPokemonDetails = getByText(/more\sdetails/i);
    fireEvent.click(secondPokemonDetails);

    const secondCheckBox = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
    fireEvent.click(secondCheckBox);

    fireEvent.click(getByText(/favorite\spokémons/i));

    const firstPokemonIsOnScreen = queryByText(firstPokemonName);
    const secondPokemonIsOnScreen = queryByText(secondPokemonName);

    expect(firstPokemonIsOnScreen).toBeInTheDocument();
    expect(secondPokemonIsOnScreen).toBeInTheDocument();

    // cleaning up

    fireEvent.click(getAllByText(/more\sdetails/i)[0]);
    const unfavotriteBox = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
    fireEvent.click(unfavotriteBox);
    fireEvent.click(getByText(/favorite\spokémons/i));
    fireEvent.click(getByText(/more\sdetails/i));
    const secondUnfavorite = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
    fireEvent.click(secondUnfavorite);
  });

  it('should not list pokemon that was not favorited', () => {
    const { getByText, getByTestId, getByRole, queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const FAVORITED_POKEMON = 3;

    const runController = Array(FAVORITED_POKEMON).fill();

    const favoriteNames = [];

    runController.forEach(() => {
      const pokemonName = getByTestId('pokemon-name').innerHTML;

      const pokemonDetails = getByText(/more\sdetails/i);
      fireEvent.click(pokemonDetails);

      const favoriteCheckBox = getByRole('checkbox', { name: /pokémon\sfavoritado\?/i });
      fireEvent.click(favoriteCheckBox);

      favoriteNames.push(pokemonName);

      fireEvent.click(getByText(/home/i));

      while (favoriteNames.includes(getByTestId('pokemon-name').innerHTML)) {
        const nextPokemonBtn = getByText(/próximo\spokémon/i);
        fireEvent.click(nextPokemonBtn);
      }
    });

    const pokemonNotFavorited = getByTestId('pokemon-name').innerHTML;

    fireEvent.click(getByText(/favorite\spokémons/i));

    favoriteNames.forEach((pokemon) => {
      const pokemonNameElement = queryByText(pokemon);
      expect(pokemonNameElement).toBeInTheDocument();
    });

    const pokemonNotFavoriteName = queryByText(pokemonNotFavorited);
    expect(pokemonNotFavoriteName).toBeNull();
  });
});
