import React from 'react';
import MainPage from './components/MainPage/mainpage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './components/productsById/productDetails';
import ShoppingCart from './components/ShoppingCart/shoppingCart'
import Login from './components/Register-Login/login'
import Register from './components/Register-Login/register'
import Favourites from './components/Favourites/favourites'
import Payment from './components/Payment/payment';
import { PrivateRoute } from './components/privateRoute';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <PrivateRoute path="/products" component={MainPage}/>
        <Route path="/shopping">
          <ShoppingCart />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
