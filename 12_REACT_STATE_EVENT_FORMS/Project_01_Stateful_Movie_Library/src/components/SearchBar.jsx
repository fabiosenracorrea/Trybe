import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/searchBar.css';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="filter-form">
        <h2>Filtre os filmes</h2>
        <div className="input-container">
          <label htmlFor="title" data-testid="text-input-label">Inclui o texto:</label>

          <input
            name="searchText"
            id="title"
            value={searchText}
            data-testid="text-input"
            onChange={onSearchTextChange}
          />

        </div>
        <div className="filters">
          <div className="check-box-container">
            <input
              type="checkbox"
              name="bookmarkedOnly"
              id="favorites"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
            <label
              htmlFor="favorites"
              data-testid="checkbox-input-label"
            >
              Mostrar somente favoritos
            </label>
          </div>
          <div className="select-container">
            <select
              name="selectedGenre"
              id="genre"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
            <label htmlFor="genre" data-testid="select-input-label">Filtrar por gênero</label>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
