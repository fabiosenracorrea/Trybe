import React from 'react';
import PropType from 'prop-types';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';
import * as IBGE from '../../services/ibgeApi';

import './styles.css';
import './responsive.css';

class StoreCheckout extends React.Component {
  constructor() {
    super();

    this.saveTotal = this.saveTotal.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.fetchStates = this.fetchStates.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    this.state = {
      cartItems,
      total: 0,
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      states: [],
      cities: [],
    };
  }

  componentDidMount() {
    const { cartItems, total } = this.state;

    const newTotal = cartItems.reduce((accumulator, current) => {
      const { product, quantity } = current;
      const { price } = product;
      const totalValue = price * quantity;

      return accumulator + totalValue;
    }, total);

    this.saveTotal(newTotal);
    this.fetchStates();
  }

  saveTotal(total) {
    this.setState({
      total,
    });
  }

  async fetchStates() {
    const states = await IBGE.getStates();

    console.log(states);

    this.setState({
      states,
    });
  }

  handleInputValueChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  handleCheckout(event) {
    event.preventDefault();

    const { history: { push } } = this.props;

    push('/');
  }

  async handleStateChange(uf) {
    const cities = await IBGE.getCities(uf);

    this.setState({
      cities,
    });
  }

  handleCityChange(som) {
    console.log(som);
  }

  render() {
    const { cartItems, total, name, cep, cpf, phone, address, email, states, cities } = this.state;
    return (
      <>
        <Header />
        <div className="store-checkout-content">
          <h1>Store Checkout</h1>
          <div className="checkout-items">
            {cartItems.map(({ product, quantity }) => (
              <div key={ product.id } className="checkout-item">
                <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
                <div className="checkout-item-info">
                  <img src={ product.thumbnail } alt={ product.title } />
                  <div className="checkout-item-price-info">
                    <p className="cart-item-price">{formatValue(Number(product.price))}</p>
                    <p data-testid="shopping-cart-product-quantity">
                      <strong>Quantidade:</strong>
                      {quantity}
                    </p>
                  </div>

                </div>
              </div>
            ))}
            <div className="total-container">
              <strong className="total">Total:</strong>
              <p className="checkout-price">
                {formatValue(Number(total))}
              </p>

            </div>
          </div>
          <form onSubmit={ this.handleCheckout } className="checkout-form">
            <h2>Informações de Cobrança</h2>
            <div className="field-containers">
              <input
                placeholder="Nome Completo"
                required
                data-testid="checkout-fullname"
                type="text"
                name="name"
                value={ name }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <input
                placeholder="E-mail"
                required
                data-testid="checkout-email"
                type="text"
                name="email"
                value={ email }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <input
                placeholder="CPF"
                required
                data-testid="checkout-cpf"
                type="text"
                name="cpf"
                value={ cpf }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <input
                placeholder="Telefone"
                required
                data-testid="checkout-phone"
                type="text"
                name="phone"
                value={ phone }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <input
                placeholder="CEP"
                required
                data-testid="checkout-cep"
                type="text"
                name="cep"
                value={ cep }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <input
                placeholder="Endereço"
                required
                data-testid="checkout-address"
                type="text"
                name="address"
                value={ address }
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />
              <select
                onChange={ ({ target }) => this.handleStateChange(target.value) }
                name="state"
                id="state"
                disabled={ !states[0] }
                required
              >
                <option selected disabled value="">Selecione uma cidade</option>
                {states.map((state) => (
                  <option key={ state.id } value={ state.id }>{state.sigla}</option>
                ))}
              </select>
              <select
                name="city"
                id="city"
                required
                disabled={ !cities[0] }
              >
                <option selected disabled value="">Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={ city.id } value={ city.nome }>{city.nome}</option>
                ))}
              </select>
            </div>
            <div className="checkout-payment">
              <div className="checkout-payment-option">
                <input required type="radio" name="payment" id="bill" />
                <label htmlFor="bill">
                  Boleto
                  <span />
                </label>
              </div>
              <div className="checkout-payment-option">
                <input required type="radio" name="payment" id="credit-card" />
                <label htmlFor="credit-card">
                  Cartão de crédito
                  <span />
                </label>
              </div>
              <button type="submit">Pagar!</button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

StoreCheckout.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};

export default StoreCheckout;
