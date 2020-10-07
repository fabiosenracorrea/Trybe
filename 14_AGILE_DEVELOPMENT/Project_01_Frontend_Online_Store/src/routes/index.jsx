import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchProduct from '../pages/SearchProduct';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetail';
import StoreCheckout from '../pages/StoreCheckout';


function Routes() {
  return (
    <Switch>
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/" component={ SearchProduct } />
      <Route path="/products/:id" component={ ProductDetail } />
      <Route path="/checkout" component={ StoreCheckout } />
    </Switch>
  );
}

export default Routes;
