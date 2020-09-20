import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleStateChangeToFilter = this.handleStateChangeToFilter.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      baseMovies: movies,
    };
  }

  handleStateChangeToFilter({ target }) {
    const { name, value, checked, type } = target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked }, this.handleFiltering);
    } else {
      this.setState({ [name]: value }, this.handleFiltering);
    }
  }

  handleFiltering() {
    const { baseMovies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    let filteredMovies = baseMovies;

    filteredMovies = filteredMovies.filter((movie) => (
      bookmarkedOnly ? (movie.bookmarked === bookmarkedOnly) : true
    ));


    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      const pattern = new RegExp(searchText, 'i');

      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.match(pattern)
          || movie.subtitle.match(pattern)
          || movie.storyline.match(pattern)
      ));
    }

    this.setState({ movies: filteredMovies });
  }


  handleAddMovie(movie) {
    const { movies } = this.props;
    const newCollection = [...movies, movie];

    this.setState({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: newCollection,
      baseMovies: newCollection,
    });
  }

  render() {
    const values = this.state;

    return (
      <div>
        <SearchBar
          searchText={values.searchText}
          bookmarkedOnly={values.bookmarkedOnly}
          selectedGenre={values.selectedGenre}
          onSearchTextChange={this.handleStateChangeToFilter}
          onBookmarkedChange={this.handleStateChangeToFilter}
          onSelectedGenreChange={this.handleStateChangeToFilter}
        />

        <MovieList
          movies={values.movies}
        />

        <AddMovie
          onClick={this.handleAddMovie}
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    bookmarked: PropTypes.bool,
  })).isRequired,
};
