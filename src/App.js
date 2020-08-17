import React, { Component } from 'react';
//pages
import LandingPage from './pages/landing-page';
import ProductPage from './pages/product-page/index';
import LogIn from './pages/LogIn -page/index';
import Register from './pages/register-page/index';
import AboutUsPage from './pages/about-page/index';
import ContactPage from './pages/contact-page/index';
import CartCheckoutPage from './pages/cart-checkout-page';
import BirthdayCakePage from './pages/birthdaycake-page';
import WeddingCakePage from './pages/weddingcake';
import OtherCakePage from './pages/othercake';
import CupCakePage from './pages/cupcakepage';
import PasswordRecover from './pages/password-reset/index';

//firebase
import { auth, createUserProfile } from './firebase/utils';

//routing
import { Route, Switch, Redirect } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/userActions';

class App extends Component {
  authListerner = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.authListerner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.authListerner();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/products' component={ProductPage} />
          <Route exact path='/signin' render={() => (currentUser ? <Redirect to='/' /> : <LogIn />)} />
          <Route exact path='/register' render={() => (currentUser ? <Redirect to='/' /> : <Register />)} />
          <Route exact path='/about' component={AboutUsPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/birthdaycake' component={BirthdayCakePage} />
          <Route exact path='/weddingcakepage' component={WeddingCakePage} />
          <Route exact path='/chocolate' component={OtherCakePage} />
          <Route exact path='/cupcakepage' component={CupCakePage} />
          <Route exact path='/cart' component={CartCheckoutPage} />
          <Route exact path='/passwordreset' component={PasswordRecover} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProsp = state => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = {
  setCurrentUser
};
export default connect(mapStateToProsp, mapDispatchToProps)(App);
