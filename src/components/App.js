import React from 'react';
import Productpage from '../pages/Product_page';
import Landing from '../pages/Landing-page';
import SigninPage from '../pages/Signin-page';
import RegisterPage from '../pages/Register-page';
import AboutUsPage from '../pages/Aboutus-page';
import ContactPage from '../pages/Contact-page';
import CartCheckoutPage from '../pages/CartCheckout-page';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Images from './Images';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="app__base">
        <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/products" component={Productpage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/cart" component={CartCheckoutPage} />
      </Switch>
      <Footer/>
    </div>
  );
}
