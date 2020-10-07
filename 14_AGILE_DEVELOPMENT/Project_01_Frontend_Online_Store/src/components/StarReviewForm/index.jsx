import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class StarReviewForm extends React.Component {
  render() {
    const {
      handleComment,
      handleInputValueChange,
      handleStarRating,
      maxRating,
    } = this.props;

    return (
      <form onSubmit={ handleComment }>
        <div className="form-email-rating">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={ ({ target }) => handleInputValueChange(target) }
            required
          />
          <div className="star-rating-container">
            {[...new Array(maxRating).keys()].map((star) => (
              <React.Fragment key={ star }>
                <input
                  key={ star }
                  required
                  type="radio"
                  name="rate"
                  id={ `rate-${maxRating - star}` }
                  onChange={ handleStarRating }
                />
                <label className="fa fa-star" htmlFor={ `rate-${maxRating - star}` } />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="comment-btn-container">
          <textarea
            name="message"
            placeholder="mensagem (opcional)"
            id="message"
            data-testid="product-detail-evaluation"
            onChange={ ({ target }) => handleInputValueChange(target) }
          />

          <button type="submit">Comentar!</button>

        </div>
      </form>
    );
  }
}

StarReviewForm.propTypes = {
  handleComment: PropTypes.func.isRequired,
  handleInputValueChange: PropTypes.func.isRequired,
  handleStarRating: PropTypes.func.isRequired,
  maxRating: PropTypes.number.isRequired,
};

export default StarReviewForm;
