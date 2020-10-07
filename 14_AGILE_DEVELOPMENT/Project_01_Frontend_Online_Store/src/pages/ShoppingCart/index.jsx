import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import formatValue from '../../utils/formatValue';

import './styles.css';
import './responsive.css';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.loadCart = this.loadCart.bind(this);
    this.handleProductQuantityAltering = this.handleProductQuantityAltering.bind(this);
    this.handleProductRemove = this.handleProductRemove.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);

    this.state = {
      cartItems: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  componentWillUnmount() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const total = cartItems.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);

    this.setState({ cartItems, total });
  }

  handleProductQuantityAltering({ target }, id) {
    const { cartItems } = this.state;
    const productsUpDateQuantity = cartItems.map((cartItem) => {
      if (cartItem.product.id !== id) {
        return cartItem;
      }
      const { name } = target;
      if (name === 'plus') {
        cartItem.quantity += 1;
      } else if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });

    const total = productsUpDateQuantity.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);

    this.setState({
      cartItems: productsUpDateQuantity,
      total,
    });
  }

  handleProductRemove(id) {
    const { cartItems } = this.state;
    const updatedCartItems = cartItems.reduce((items, current) => {
      if (current.product.id !== id) {
        return [...items, current];
      }
      return items;
    }, []);

    this.setState({
      cartItems: updatedCartItems,
    });
  }

  handleClearCart() {
    this.setState({
      cartItems: [],
    });
  }

  render() {
    const { cartItems, total } = this.state;
    if (cartItems[0]) {
      return (
        <>
          <Header />
          <div className="shopping-cart-page">
            <h2>Carrinho de Compras</h2>
            <div className="shopping-cart-container">
              <div className="shopping-cart-content">
                {cartItems.map(({ product, quantity }) => (
                  <div key={ product.id } className="shopping-cart-items">
                    <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
                    <div className="cart-item-detail">
                      <img src={ product.thumbnail } alt={ product.title } />
                      <div className="cart-item-info">
                        <p className="cart-item-price">{formatValue(Number(product.price))}</p>
                        <p data-testid="shopping-cart-product-quantity" className="shopping-cart-product-quantity">
                          <strong>Quantidade:</strong>
                          {quantity}
                        </p>
                        <div className="cart-item-btn-container">
                          <button
                            data-testid="product-decrease-quantity"
                            type="button"
                            className="plus-minus"
                            onClick={ (event) => this.handleProductQuantityAltering(event, product.id) }
                            name="minus"
                          >
                            -
                          </button>
                          <button
                            data-testid="product-increase-quantity"
                            type="button"
                            className="plus-minus"
                            onClick={ (event) => this.handleProductQuantityAltering(event, product.id) }
                            name="plus"
                            disabled={ quantity === product.available_quantity }
                          >
                            +
                          </button>
                          <button type="button" onClick={ () => this.handleProductRemove(product.id) }>Remover</button>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

              <div className="shopping-cart-resume">
                <h4>Total</h4>
                <div className="value-container">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={ product.id } className="item-value">
                      <p>{product.id}</p>
                      <p>{formatValue(product.price * quantity)}</p>
                    </div>
                  ))}
                  <p className="total-value">{formatValue(total)}</p>
                </div>

                <div className="resume-buttons">
                  <button type="button" onClick={ this.handleClearCart }>Esvaziar</button>
                  <Link
                    to="/checkout"
                    data-testid="checkout-products"
                  >
                    Finalizar

                  </Link>
                </div>
              </div>

            </div>
          </div>
          <Footer />
        </>
      );
    }
    return (
      <>
        <Header />
        <div className="empty-cart-message-container">
          <span className="far fa-sad-tear" />
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default ShoppingCart;
