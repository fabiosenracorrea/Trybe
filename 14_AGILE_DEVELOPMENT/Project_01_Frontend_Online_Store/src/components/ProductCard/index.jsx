import React from 'react';
import PropTypes from 'prop-types';

import formatValue from '../../utils/formatValue';

import './styles.css';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, children, freeShipping, itemInCart } = this.props;

    return (
      <div className={ `card ${itemInCart ? 'added' : ''}` } data-testid="product">
        <h3 className="product-title">{title}</h3>
        <img className="product-img" src={ thumbnail } alt={ title } />
        <p className="product-price">
          {formatValue(Number(price))}
        </p>
        {freeShipping && (
          <p className="product-free-shipping" data-testid="free-shipping">
            Frete Gratis!
          </p>
        )}
        {children}
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  freeShipping: PropTypes.bool.isRequired,
  itemInCart: PropTypes.bool.isRequired,
};

export default ProductCard;
