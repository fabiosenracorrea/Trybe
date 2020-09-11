import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Pokemon({ pokemon }) {
  return (
    <>
      <div className="pokemon-container">
        <img src={pokemon.image} alt="pkm"/>
      </div>
      <div className="info-container">
        <div className="info">
          <h1>{pokemon.name}</h1>
          <p className="pokemon-id">id: {pokemon.id}</p>
          <p className="type">Type: {pokemon.type}</p>
          <p className="weight">Weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
          <a className="moreInfo" href={pokemon.moreInfo} target="_blank">More info</a>
        </div>
      </div>
    </>
  )
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    },
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}