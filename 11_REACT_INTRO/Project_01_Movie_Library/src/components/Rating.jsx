import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating-text">
          Movie Rating
        </span>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

export default Rating;

Rating.defaultProps = { rating: PropTypes.number };

Rating.propTypes = { rating: PropTypes.number };
