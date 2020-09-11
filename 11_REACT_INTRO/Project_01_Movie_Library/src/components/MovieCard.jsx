import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, imagePath: image, rating, storyline } = this.props.movie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={image} alt="movie-img" className="movie-card-image" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

export const props = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePage: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = props;

MovieCard.propTypes = props;
