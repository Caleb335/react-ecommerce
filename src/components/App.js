import React from 'react';
import Productpage from './Product_page';
import Landing from './Landing-page';
import Login from './Login';
import Register from './Register';
import Images from './Images';

export default function App() {
  return (
    <div className="app__base">
      <Landing />
      <Login/>
      <br/><br/>
      <Register/>
    </div>
  );
}
