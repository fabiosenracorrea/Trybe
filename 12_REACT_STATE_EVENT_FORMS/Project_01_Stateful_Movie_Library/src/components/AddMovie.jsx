import React from 'react';
import PropTypes from 'prop-types';

import '../styles/addMovie.css';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInput({ target }) {
    const { name, value, type } = target;

    if (type === 'number') {
      if (Number(value) < 0 || Number(value) > 5) {
        this.setState({ [name]: 0 });
      } else {
        this.setState({ [name]: Number(value) });
      }
      return;
    }

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const movie = this.state;

    onClick(movie);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }


  render() {
    const { title, rating, genre, subtitle, imagePath, storyLine } = this.state;

    return (
      <form className="add-movie" data-testid="add-movie-form">
        <h3>Adicione mais filmes</h3>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="title" data-testid="title-input-label">Título</label>
            <input
              data-testid="title-input"
              name="title"
              value={title}
              onChange={this.handleInput}
            />
          </div>
          <div className="input-container">
            <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
            <input
              data-testid="subtitle-input"
              name="subtitle"
              value={subtitle}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="image" data-testid="image-input-label">Imagem</label>
            <input
              data-testid="image-input"
              name="imagePath"
              value={imagePath}
              onChange={this.handleInput}
            />
          </div>
          <div className="input-container">
            <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
            <select
              data-testid="genre-input"
              name="genre"
              value={genre}
              onChange={this.handleInput}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </div>
        </div>

        <div className="textarea-container">
          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
          <textarea
            data-testid="storyline-input"
            name="storyLine"
            value={storyLine}
            onChange={this.handleInput}
          />
        </div>
        <div className="input-container">
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={rating}
            onChange={this.handleInput}
          />
        </div>

        <button
          type="submit"
          data-testid="send-button"
          onClick={this.handleClick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
