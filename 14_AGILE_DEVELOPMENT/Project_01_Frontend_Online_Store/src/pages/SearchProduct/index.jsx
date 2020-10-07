import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

import './styles.css';
import './responsive.css';

class SearchProduct extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.saveInputValue = this.saveInputValue.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.handleOrdering = this.handleOrdering.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
      inputValue: '',
      products: [],
      cartProducts: [],
      cartIds: [],
      cartProductsQuantity: 0,
      sort: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.loadCart();
  }

  componentWillUnmount() {
    const { cartProducts } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    const initialQuantity = 0;

    const cartProductsQuantity = cartProducts.reduce((accumulator, { quantity }) => accumulator += quantity, initialQuantity);

    const cartIds = cartProducts.map(({ product }) => product.id);

    this.setState({ cartProducts, cartProductsQuantity, cartIds });
  }

  saveInputValue(inputValue) {
    this.setState({
      inputValue,
    });
  }

  handleSearchProduct(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    }, async () => {
      const { categoryId, inputValue } = this.state;

      if (!inputValue) {
        return;
      }

      const {
        results: products,
      } = await getProductsFromCategoryAndQuery(categoryId, inputValue);

      this.setState({
        products,
        loading: false,
      });
    })
  }

  handleCategoryClick(categoryId) {
    this.setState({
      loading: true,
    }, async () => {
      const { inputValue } = this.state;

      const {
        results: products,
      } = await getProductsFromCategoryAndQuery(categoryId, inputValue);

      this.setState({
        products,
        categoryId,
        loading: false,
      });
    })
  }

  addItemToCart(id) {
    const { products, cartProducts, cartProductsQuantity, cartIds } = this.state;
    const cartItems = [...cartProducts];
    const newCartIds = [...cartIds];

    const cartItem = products.find((product) => product.id === id);
    const itemAlreadyInCart = cartItems.findIndex(({ product }) => product.id === id);

    if (cartItems[itemAlreadyInCart]) {
      if (cartItems[itemAlreadyInCart].quantity === cartItem.available_quantity) return;

      cartItems[itemAlreadyInCart].quantity += 1;
    } else {
      cartItems.push({ product: cartItem, quantity: 1 });
      newCartIds.push(cartItem.id);
    }

    const newCartProductsQuantity = cartProductsQuantity + 1;

    this.setState({
      cartProducts: cartItems,
      cartProductsQuantity: newCartProductsQuantity,
      cartIds: newCartIds,
    });
  }

  handleOrdering({ value }) {
    const { products, sort } = this.state;

    if (value === sort) return;

    const sortedProducts = [...products];

    switch (value) {
    case 'highest':
      sortedProducts.sort((a, b) => +b.price - +a.price);
      break;
    case 'lowest':
      sortedProducts.sort((a, b) => +a.price - +b.price);
      break;
    default:
      sortedProducts.sort((a, b) => {
        const { shipping: { free_shipping: aFree } } = a;
        const { shipping: { free_shipping: bFree } } = b;

        const shouldGoUp = -1;
        const shouldStayAsItIs = 0;
        const shouldGoDown = 1;

        if (aFree && bFree) return shouldStayAsItIs;
        if (aFree) return shouldGoUp;
        if (bFree) return shouldGoDown;

        return shouldStayAsItIs;
      });
      break;
    }

    this.setState({
      products: sortedProducts,
      sort: value,
    });
  }

  render() {
    const { categories, inputValue, products, cartProductsQuantity, cartIds, loading } = this.state;
    return (
      <>
        <Header cartProductsQuantity={ cartProductsQuantity } />
        <div className="search-product-content">
          <div className="category-container">
            <h2>Categorias</h2>
            <ul>
              {categories.map(({ name, id }) => (
                <li key={ id }>
                  <button
                    data-testid="category"
                    className="category-button"
                    type="button"
                    onClick={ () => this.handleCategoryClick(id) }
                  >
                    {name}
                  </button>
                </li>
              ))}

            </ul>
          </div>

          <div className="form-products">
            <form onSubmit={ this.handleSearchProduct }>
              <h1 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h1>
              <div className="input-btn-container">
                <input
                  onChange={ (e) => this.saveInputValue(e.target.value) }
                  value={ inputValue }
                  data-testid="query-input"
                  type="text"
                />
                <button data-testid="query-button" type="submit">Buscar</button>
                <select
                  name="order"
                  defaultValue=""
                  onChange={ ({ target }) => this.handleOrdering(target) }
                  disabled={ !products[0] }
                >
                  <option disabled value="">Ordenar</option>
                  <option value="highest">Maior Preço</option>
                  <option value="lowest">Menor Preço</option>
                  <option value="free-shipping">Frete Grátis</option>
                </select>
              </div>
            </form>

            <div className="product-list">
              {(products[0] && !loading)
                ? products.map(({ title, thumbnail, price, id, shipping }) => (

                  <ProductCard
                    key={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    freeShipping={ shipping.free_shipping }
                    itemInCart={ cartIds.includes(id) }
                  >
                    <Link
                      data-testid="product-detail-link"
                      to={ { pathname: `/products/${id}`, state: { products } } }
                    >
                      Detalhes
                    </Link>
                    <button
                      type="button"
                      data-testid="product-add-to-cart"
                      onClick={ () => this.addItemToCart(id) }
                    >
                      Adicionar ao carrinho
                    </button>
                  </ProductCard>
                ))
                : (
                  <div className="no-product-container">
                    {loading
                      ? (
                        <>
                          <span className="loader" />
                          <span className="loading-text">loading...</span>
                        </>
                      )
                      : (
                        <>
                          <span className="far fa-sad-tear" />
                          <p className="no-products">Nenhum produto foi encontrado</p>
                        </>
                      )
                    }
                  </div>
                )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SearchProduct;
