import React from 'react';
import Productpage from './Product_page';
import Images from './Images'

export default function App() {
  return (
    <div className="app__base">
      <h1>Welcome Here! 😍 </h1>
      <Productpage Images={Images}/>
    </div>
  );
}
