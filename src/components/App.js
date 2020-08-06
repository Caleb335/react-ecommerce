import React from 'react';
import Productpage from './Product_page';
import LandingPage from './Landing-page';
import Images from './Images'

export default function App() {
  return (
    <div className="app__base">
      <LandingPage />
      <Productpage Images={Images}/>
    </div>
  );
}
