import React from 'react';

import './styles.css';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner" />
      <h4>Carregando receitas...</h4>
    </div>
  );
}

export default LoadingSpinner;
