import React, { Component } from 'react';

import './styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loader-container">
          <div className="loader" />
          <p>Carregando...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
