import React, { Component } from 'react';
import BackHeading from '../components/BackHeading';

class NotFound extends Component {
  render() {
    return (
      <>
        <BackHeading />
        <div data-testid="404-error" className="loading-container">Página não encontrada :(</div>
      </>
    );
  }
}

export default NotFound;
