import React, { useState } from 'react';
import Pokemon from '../Pokemon';

import pokemonData from '../../assets/data/pokemon';

import './style.css';

function Pokedex() {
  const [currentPokemon, setCurrentPokemon] = useState(0);

  function handlePassPokemon(elementClass) {
    if (elementClass === 'left-btn') {
      (currentPokemon > 0)
        ? setCurrentPokemon(currentPokemon - 1)
        : setCurrentPokemon(pokemonData.length - 1)
      return;
    }

    (currentPokemon < pokemonData.length - 1)
      ? setCurrentPokemon(currentPokemon + 1)
      : setCurrentPokemon(0)
    return;
  }

  return (
    <div className="pokedex-ui">
      <div className="pass-pokemon">
        <button className="left-btn btn" onClick={e => handlePassPokemon(e.target.className)}></button>
      </div>
      <div className="pokemon-card">
        <Pokemon pokemon={pokemonData[currentPokemon]} />
      </div>
      <div className="pass-pokemon">
        <button className="right-btn btn" onClick={e => handlePassPokemon(e.target.className)}></button>
      </div>
    </div>
  )
}

export default Pokedex;