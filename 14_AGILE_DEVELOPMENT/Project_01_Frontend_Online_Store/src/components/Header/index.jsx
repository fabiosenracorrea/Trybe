import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import './styles.css';
import './responsive.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.cartIconRef = React.createRef();

    this.handleCartShake = this.handleCartShake.bind(this);

    const { cartProductsQuantity } = this.props;

    this.state = {
      quantity: cartProductsQuantity || 0,
    };
  }

  componentDidUpdate() {
    this.handleCartShake();
  }

  handleCartShake() {
    const { cartProductsQuantity } = this.props;
    const { quantity } = this.state;

    if (cartProductsQuantity !== quantity) {
      this.setState({ quantity: cartProductsQuantity }, () => {
        this.cartIconRef.current.classList.add('shake-cart');

        setTimeout(() => {
          this.cartIconRef.current.classList.remove('shake-cart');
        }, 300);
      });
    }
  }

  render() {
    const { cartProductsQuantity } = this.props;
    return (
      <header className="app-header">
        <div className="header-title">
          <span className="fas fa-store header-icon" />
          <h1>Online Shopping</h1>
        </div>
        <nav>
          <Link to="/" className="fa fa-home home-icon" />
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="fa fa-shopping-cart cart-icon"
            ref={ this.cartIconRef }
          >
            {(!!cartProductsQuantity) && (
              <span
                data-testid="shopping-cart-size"
                className="cart-quantity"
              >
                {cartProductsQuantity}
              </span>
            )}
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  cartProductsQuantity: Proptypes.number,
};

Header.defaultProps = {
  cartProductsQuantity: 0,
};

export default Header;
