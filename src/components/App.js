import React from 'react';
import Productpage from './Product_page';
import Landing from './Landing-page';
import Images from './Images';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="app__base">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/products" component={Productpage} />
      </Switch>
    </div>
  );
}
