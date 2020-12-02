import React from 'react';
import { Link } from 'react-router-dom';
import { BiDrink, BiFoodMenu } from 'react-icons/bi';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import './styles.css';

function Explore() {
  return (
    <div className="explore-page">
      <Header pageTitle="Explorar" />
      <Navbar />

      <h1>Explore ainda mais delícias</h1>

      <div className="explore-content">
        <Link
          to="/explorar/comidas"
          data-testid="explore-food"
        >
          <BiFoodMenu />
          Explorar
          <br />

          Comidas
        </Link>

        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
        >
          <BiDrink />
          Explorar
          <br />
          Bebidas
        </Link>
      </div>

    </div>
  );
}

export default Explore;
