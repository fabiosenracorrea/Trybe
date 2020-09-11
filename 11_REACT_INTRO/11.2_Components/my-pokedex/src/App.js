import React from 'react';

import Pokedex from './components/Pokedex'

import pokemonLogo from './assets/images/pokemon.png';

import './App.css';

function App() {
  return (
    <div id="home">
      <img src={pokemonLogo} alt="pokemon-logo" className="pokemon-title" />
      <Pokedex />
    </div>

  );
}

export default App;
