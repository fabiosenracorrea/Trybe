import React from 'react';
import api from '../../services/api';

import './styles.css';

class DogImage extends React.Component {
  constructor() {
    super();

    this.handleGetDogImg = this.handleGetDogImg.bind(this);

    this.state = {
      dogImg: '',
      loading: true,
      name: '',
    }
  }

  async handleGetDogImg() {
    const { name, dogImg } = this.state;

    if (name) {
      const doggies = JSON.parse(localStorage.getItem('savedDogs')) || [];

      doggies.push({
        name,
        image: dogImg,
      });

      localStorage.setItem('savedDogs', JSON.stringify(doggies));
    }

    this.setState({
      loading: true,
    }, async () => {
      const { data: { message } } = await api.get('/random');

      this.setState({
        loading: false,
        dogImg: message,
        name: ''
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogImg.includes('terrier')) return false;

    return true;
  }

  componentDidUpdate() {
    if (!this.state.loading && !this.state.name) {
      const dog = this.state.dogImg;
      const [, breed] = dog.match(/breeds\/\w+/)[0].split('/');

      alert(`Nice! This one is a ${breed}`);
    }
  }

  async componentDidMount() {
    const doggies = JSON.parse(localStorage.getItem('savedDogs'));

    if (doggies) {
      const { name, image } = doggies.pop();
      this.setState({
        loading: false,
        name,
        dogImg: image,
      });
      return;
    }

    const { data: { message } } = await api.get('/random');

    this.setState({
      dogImg: message,
      loading: false,
    })
  }

  render() {
    const { loading, dogImg } = this.state;

    return (
      <div className="dog-image">
        <h1>Random Dog!</h1>
        {loading ? <div className="loader"></div> : <img src={dogImg} alt="random dog image"/>}
        <label htmlFor="">Name it!</label>
        <input type="text" value={this.state.name} onChange={({ target }) => this.setState({ name: target.value })} />
        <button type="button" onClick={this.handleGetDogImg}>Get me another Dog!</button>
      </div>
    )
  }
}

export default DogImage;