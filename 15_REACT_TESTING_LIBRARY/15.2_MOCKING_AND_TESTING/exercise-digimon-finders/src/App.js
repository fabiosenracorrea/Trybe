import React from 'react';
import './App.css';
import Digimon from './Digimon';

class App extends React.Component {
  constructor() {
    super();

    this.highlight = this.highlight.bind(this);

    this.state = { digimon: { name: '' }, searchDigimon: '', isFetching: false, errorMessage: '', highlight: false };
  }

  inputValue = (value) => {
    this.setState((state) => ({
      ...state,
      searchDigimon: value,
    }));
  }

  highlight() {
    const { highlight } = this.state;
    this.setState({
      highlight:!highlight,
    })
  }

  requestDigimon = async () => {
    const { searchDigimon } = this.state;
    if (searchDigimon) {
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)
        .then((res) => res.json())
        .then((results) => this.setState((state) => ({
          ...state,
          digimon: results[0],
          errorMessage: results["ErrorMsg"],
          isFetching: true,
        })));
    }
  }

  render() {
    const { digimon, searchDigimon, isFetching, errorMessage, highlight } = this.state;
    return (
      <div className="App">
        <input
          value={searchDigimon}
          type="text"
          onChange={({ target }) => this.inputValue(target.value)}
          data-testid="input"
        />
        <button
          data-testid="buttonSearch"
          onClick={this.requestDigimon}
          type="button"
        >
          Search Digimon
        </button>
        { isFetching && !errorMessage
          ? <Digimon digimon={digimon} />
          : <h1 className={`hl1 ${highlight ? 'hl2' : ''}`} onClick={this.highlight}>{errorMessage || 'Faça uma pesquisa'}</h1>
        }
      </div>
    );
  }
}

export default App;
