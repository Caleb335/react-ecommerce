import React from 'react';


//Importing Images
import birthday from './../../assets/img/cakes/birthday/birthday.jpg';
import birthday1 from './../../assets/img/cakes/birthday/birthday1.jpg';
import birthday2 from './../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from './../../assets/img/cakes/birthday/birthday3.jpg';
import birthday4 from './../../assets/img/cakes/birthday/birthday4.jpg';
import birthday5 from './../../assets/img/cakes/birthday/birthday5.jpg';

import cup from './../../assets/img/cakes/cup/cup.jpg';
import cup1 from './../../assets/img/cakes/cup/cup1.jpg';
import cup2 from './../../assets/img/cakes/cup/cup2.jpg';
import cup3 from './../../assets/img/cakes/cup/cup3.jpg';
import cup4 from './../../assets/img/cakes/cup/cup4.jpg';



export default function ProductPage({Images}) {
  return (
    <div className="product_page">
      <header>
          <div>
            <h1>Logo</h1>
          </div>
          <input type="text" placeholder="Search for a cake.."/>
          <div>
            <li>Contacts</li>
            <li>Help</li>
          </div>
      </header>

      <div className="banner">
          <img src='' alt=""/>
        

        <div>
          <p>The Best Cakes in Every Category</p>
          <input type="text" placeholder="Search for a cake..."/>
        </div>
      </div>

      
      <div className="image-gallery">

          <div className="birthday">
            <h2>Birthday</h2>
              <img src={birthday} alt=""/>
              <img src={birthday1} alt=""/>
              <img src={birthday2} alt=""/>
              <img src={birthday3} alt=""/>
              <img src={birthday4} alt=""/>
              <img src={birthday5} alt=""/>
          </div>

          <div className="cupcakes">
            <img src={cup} alt=""/>
            <img src={cup1} alt=""/>
            <img src={cup2} alt=""/>
            <img src={cup3} alt=""/>
            <img src={cup4} alt=""/>
          </div>

          <div>
          
          </div>
      </div>
   
    </div>
  );
}

// {
//   Images[0].map(image => (
//     <img key={image.id} src={image.src} style={{
//           width:'400px'
//         }}/>
//   ))
// }
// {
//   Images[1].map(image => (
//     <img key={image.id} src={image.src} style={{
//           width:'400px'
//         }}/>
//   ))
// }