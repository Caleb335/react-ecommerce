import React from 'react';
import { Link } from 'react-router-dom';

import flat from '../../assets/img/flat-cake.jpg';

export default function Header() {
  return (
    <div className="header__base">
      <header>
        <div className="brand">
          <a href="">Foldables</a>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
            <li className="nav-item">
              <Link to="products">Products</Link>
            </li>
            <li className="nav-item">
              <a href="#">Sign in</a>
            </li>
            <li className="nav-item">
              <a href="#">
                Cart <i class="fa fa-cart-arrow-down"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="header-intro">
        <div className="text-cta">
          <h2 className="text-intro">
            Find out the sweet story behind our Mastery.
          </h2>
          <p className="more-intro">
            Everything we offer is made right here, from cookies to pasteries to
            cakes. Name them, we've got you covered.
          </p>
        </div>
        <div className="image-cta">
          <img
            src={flat}
            className="img-intro"
            alt="an image showing a very flat cake"
          />
        </div>
      </div>
    </div>
  );
}
