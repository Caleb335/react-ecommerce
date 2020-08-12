import React from "react";
import "./style.scss";
// //import Header from '../../components/header/header';
// import birthday from '../../assets/img/cakes/birthday/birthday.jpg';
// //import birthday1 from '../../assets/img/cakes/birthday/birthday1.jpg';
// import birthday2 from '../../assets/img/cakes/birthday/birthday2.jpg';
// import birthday3 from '../../assets/img/cakes/birthday/birthday3.jpg';
// //import birthday4 from '../../assets/img/cakes/birthday/birthday4.jpg';
// import birthday5 from '../../assets/img/cakes/birthday/birthday5.jpg';
// //import flat from '../../assets/img/flat-cake.jpg';

// import cup from '../../assets/img/cakes/cup/cup.jpg';
// import cup1 from '../../assets/img/cakes/cup/cup1.jpg';
// //import cup2 from '../../assets/img/cakes/cup/cup2.jpg';
// import cup3 from '../../assets/img/cakes/cup/cup3.jpg';
// //import cup4 from '../../assets/img/cakes/cup/cup4.jpg';

// import other1 from '../../assets/img/other1.jpg';

import { others } from "../../Data";
const OtherCakePage = () => {
  return (
    <div className="landing">
      <div className="header"></div>

      <div className="landing-body">
        <div className="call-to-action">
          <div className="call-buttons">
            <button>Chocolate</button>
          </div>

          <div className="action call-products">
            {others.map((cake) => (
              <figure key={cake.id}>
                <img src={cake.imageUrl} className="product" alt="" />
                <figcaption>
                  <p className="name">{cake.name}</p>
                  <p className="price">{cake.price}</p>
                  <button>
                    Add to cart <i className="fa fa-cart-arrow-down"></i>
                  </button>
                </figcaption>
              </figure>
            ))}

            {/* The Modal */}
            <div id="myModal" className="modal">
              {/* The Close Button */}
              <span className="close">&times;</span>

              {/* Modal Content (The Image) */}
              <img className="modal-content" id="img01" alt="" />

              {/* Modal Caption (Image Text) */}
              <div id="caption"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCakePage;
