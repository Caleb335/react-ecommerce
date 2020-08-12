import React from "react";
import "./style.scss";

import { birthdayCakes } from "../../Data";
const BirthdayCakePage = () => {
  //const birthday = birthdayCakes[0]
  return (
    <div className="landing">
      <div className="header"></div>

      <div className="landing-body">
        <div className="call-to-action">
          <div className="call-buttons">
            <button>Birthday</button>
          </div>

          <div className="action call-products">
            {birthdayCakes.map((cake) => (
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

export default BirthdayCakePage;
