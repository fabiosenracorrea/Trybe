import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarReviewForm from '../../components/StarReviewForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import formatValue from '../../utils/formatValue';

import './styles.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.handleProductQuantityAltering = this.handleProductQuantityAltering.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.loadComments = this.loadComments.bind(this);

    const { id } = this.props.match.params;

    this.state = {
      quantity: 1,
      email: '',
      message: '',
      rating: 0,
      comments: [],
      id,
      cartProducts: [],
      cartProductsQuantity: 0,
    };
  }

  componentDidMount() {
    this.loadCart();
    this.loadComments();
  }

  componentWillUnmount() {
    const { id, comments, cartProducts } = this.state;

    localStorage.setItem('cartItems', JSON.stringify(cartProducts));

    if (comments.length) {
      const storeComments = JSON.parse(localStorage.getItem('storeComments')) || [];

      const commentIndex = storeComments.findIndex((comment) => comment.id === id);

      if (!storeComments[commentIndex]) {
        storeComments.push({
          comments,
          id,
        });
        localStorage.setItem('storeComments', JSON.stringify(storeComments));
        return;
      }

      storeComments[commentIndex].comments = comments;

      localStorage.setItem('storeComments', JSON.stringify(storeComments));
    }
  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    const initialQuantity = 0;

    const cartProductsQuantity = cartProducts.reduce((accumulator, { quantity }) => accumulator += quantity, initialQuantity);

    this.setState({ cartProducts, cartProductsQuantity });
  }

  loadComments() {
    const { id } = this.state;

    const storeComments = JSON.parse(localStorage.getItem('storeComments')) || [];

    const oldComments = storeComments.find((savedComments) => savedComments.id === id);

    if (oldComments) {
      this.setState({
        comments: oldComments.comment,
      });
    }
  }

  handleInputValueChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  handleStarRating({ target }) {
    let rating;
    switch (target.id) {
    case 'rate-5':
      rating = 5;
      break;
    case 'rate-4':
      rating = 4;
      break;
    case 'rate-3':
      rating = 3;
      break;
    case 'rate-2':
      rating = 2;
      break;
    default:
      rating = 1;
      break;
    }

    this.setState({
      rating,
    });
  }

  addItemToCart(product, id, quantity) {
    const { cartProducts, cartProductsQuantity } = this.state;
    const cartItems = [...cartProducts];

    const itemAlreadyInCart = cartItems.findIndex(({ product: item }) => item.id === id);

    if (cartItems[itemAlreadyInCart]) {
      cartItems[itemAlreadyInCart].quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }

    const newCartProductsQuantity = cartProductsQuantity + quantity;

    this.setState({ cartProducts: cartItems, cartProductsQuantity: newCartProductsQuantity });
  }

  handleProductQuantityAltering({ target }) {
    let { quantity } = this.state;
    const { name } = target;
    if (name === 'plus') {
      quantity += 1;
    } else {
      quantity = quantity === 1 ? 1 : quantity - 1;
    }
    this.setState({ quantity });
  }

  handleComment(event) {
    event.preventDefault();

    const { email, rating, message, comments } = this.state;

    const comment = {
      email,
      rating,
      message,
    };

    const newComments = [...comments, comment];

    this.setState({
      comments: newComments,
    });
  }

  render() {
    const { products } = this.props.location.state;
    const { quantity, comments, id, cartProductsQuantity } = this.state;

    const product = products.find((productItem) => id === productItem.id);

    const { shipping: { free_shipping: freeShipping }, attributes } = product;

    const filteredAttributes = attributes.filter(({ name, value_name: value }) => name && value);

    return (
      <>
        <Header cartProductsQuantity={ cartProductsQuantity } />
        <div className="product-detail-content">
          <div className="product-detail-container" data-testid="product-detail-name">
            <h2 className="product-detail-title">{product.title}</h2>
            <div className="product-details-division">
              <img src={ product.thumbnail } alt="imagem do produto" className="product-detail-img" />
              <div className="product-info">
                <span className="product-detail-price">
                  {formatValue(Number(product.price))}
                </span>
                {freeShipping && (
                  <p className="product-detail-free-shipping" data-testid="free-shipping">
                    Frete Gratis!
                  </p>
                )}
                <div className="product-add-cart-container">
                  <p className="product-detail-add-cart">Adicionar ao carrinho</p>
                  <div>
                    <button
                      type="button"
                      name="minus"
                      className="product-detail-minus add-minus"
                      onClick={ this.handleProductQuantityAltering }
                    >
                      -

                    </button>
                    <input
                      type="number"
                      min={ 1 }
                      max={ product.available_quantity }
                      step={ 1 }
                      value={ quantity }
                      readOnly
                    />
                    <button
                      type="button"
                      className="product-detail-plus add-minus"
                      name="plus"
                      onClick={ this.handleProductQuantityAltering }
                      disabled={ quantity === product.available_quantity }
                    >
                      +

                    </button>
                    <button
                      type="button"
                      data-testid="product-detail-add-to-cart"
                      className="product-detail-button-add-cart"
                      onClick={ () => this.addItemToCart(product, id, quantity) }
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>

            </div>


            <div className="product-detail-more-info">
              {filteredAttributes.map((attribute) => (
                <div key={ attribute.name } className="product-detail-attribute-container">
                  <strong>
                    {attribute.name}
                    :
                    {' '}
                  </strong>
                  <span>{attribute.value_name}</span>
                </div>
              ))}
            </div>

          </div>
          <section className="product-reviews">
            <div className="review-form-container">
              <h3>Avaliações</h3>
              <StarReviewForm
                handleComment={ this.handleComment }
                handleInputValueChange={ this.handleInputValueChange }
                handleStarRating={ this.handleStarRating }
                maxRating={ 5 }
              />

            </div>

            <div className="user-reviews">
              {!comments.length
                ? <p>Sem comentários para este produto.</p>
                : (
                  comments.map((comment, index) => (
                    <div key={ `${comment.email + index}` } className="comment">
                      <div className="comment-header">
                        <p className="comment-email">{comment.email}</p>
                        <div className="comment-rating">
                          {[...new Array(comment.rating)].map((star, i) => (
                            <span key={ `${comment.email + index + i}` } className="fa fa-star comment-rating" />
                          ))}
                          {[...new Array(5 - comment.rating)].map((star, i) => (
                            <span key={ `${comment.email + index + i}` } className="fa fa-star comment-no-rating" />
                          ))}
                        </div>
                      </div>
                      <p className="comment-body">
                        {comment.message}
                      </p>
                    </div>
                  ))
                )}
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string,
  }) }).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      attributes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value_name: PropTypes.string,
        value_id: PropTypes.string,
      })),
    })) }) }).isRequired,
};

export default ProductDetail;
