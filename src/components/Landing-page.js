import React from 'react';
import { useSpring, animated, config } from 'react-spring';


// Import cake images
import wedding_cake_icon from "../../assets/img/cakes/wedding/jason-leung-fXAuCMEYGY4-unsplash.jpg";
import birthday_cake_icon from "../../assets/img/cakes/birthday/nathalie-jaramillo-i2WXnmd1tYo-unsplash.jpg";
import cup_cake_icon from "../../assets/img/cakes/cup/siora-photography-Ea8JJBMFw3g-unsplash.jpg";
import chocolate_cake_icon from "../../assets/img/cakes/birthday/david-holifield-kPxsqUGneXQ-unsplash (1).jpg"

import wedding_cake1 from '../../assets/img/cakes/wedding/deva-williamson-Dd8_frJOHco-unsplash.jpg';
import wedding_cake2 from '../../assets/img/cakes/wedding/jason-leung-fXAuCMEYGY4-unsplash.jpg';
import wedding_cake3 from '../../assets/img/cakes/wedding/melissa-walker-horn-4on47p0-bk4-unsplash.jpg';

import birthday_cake1 from '../../assets/img/cakes/birthday/deva-williamson-TiSLq6Gbftg-unsplash.jpg';
import birthday_cake2 from '../../assets/img/cakes/birthday/nathalie-jaramillo-i2WXnmd1tYo-unsplash.jpg';
import birthday_cake3 from '../../assets/img/cakes/birthday/david-holifield-kPxsqUGneXQ-unsplash (1).jpg';

import cup_cake1 from '../../assets/img/cakes/cup/deva-williamson-S2jw81lfrG0-unsplash.jpg';
import cup_cake2 from '../../assets/img/cakes/cup/kim-daniels-OrkEasJeY74-unsplash.jpg';
import cup_cake3 from '../../assets/img/cakes/cup/siora-photography-Ea8JJBMFw3g-unsplash.jpg';

export default function LandingPage() {

  const slideProps = useSpring({
    opacity: 1,
    from: {opacity: 0},
    config: {delay: 1000, duration:  1000}
  })

  return (
    <div >
      <animated.div style={slideProps}>
        <header>
          <div className="container-fluid">

            <nav>
              <h1 className="float-left">Selene's</h1>

              <ul className="float-right">
                <li className="cart">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" 
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                </li>
                <li>items</li>
              </ul>
            </nav>

            <div className="header-content">
              <div className="row">
                <div className="col-md-6">
                  <h1>Get the most exquisite and quality cake 🍰</h1>

                  <p>Cillum laborum adipisicing reprehenderit ipsum aute veniam dolor laboris labore 
                    fugiat sit voluptate esse aliquip. Laboris anim amet consectetur non adipisicing 
                    excepteur velit incididunt dolore nisi irure minim non. Occaecat dolor cillum labore 
                    eu adipisicing ea adipisicing ad magna cillum. Voluptate ipsum mollit ad Lorem ipsum 
                    nostrud Lorem dolor et incididunt sunt incididunt. Sit quis voluptate ad nostrud velit 
                    eiusmod duis proident ex mollit voluptate et veniam ut. In commodo nulla duis ullamco.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </header>
      </animated.div>
      

      {/* Featured Section */}
      <div className="featured-section">
        <div className="container">
          <h2 className="title">Featured</h2>

          <div className="category">
            <button><img src={wedding_cake_icon} alt="cake" className="rounded-circle" width="20px" height="20px" />Wedding</button>
            <button><img src={birthday_cake_icon} alt="cake" className="rounded-circle" width="20px" height="20px" />Birthday</button>
            <button><img src={cup_cake_icon} alt="cake" className="rounded-circle" width="20px" height="20px" />Cupcake</button>
            <button><img src={chocolate_cake_icon} alt="cake" className="rounded-circle" width="20px" height="20px" />Chocolate</button>
          </div>

          <div className="category-img">
            <img src={wedding_cake1} id="myImg" className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={birthday_cake1} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={cup_cake1} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={birthday_cake3} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={wedding_cake3} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={birthday_cake2} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={cup_cake2} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={wedding_cake2} className="featured-cake img-responsive" alt="featured-cake"/>
            <img src={cup_cake3} className="featured-cake img-responsive" alt="featured-cake"/>
            
          </div>

          {/* The Modal */}
          <div id="myModal" class="modal">

            {/* The Close Button */}
            <span class="close">&times;</span>

            {/* Modal Content (The Image) */}
            <img class="modal-content" id="img01" />

            {/* Modal Caption (Image Text) */}
            <div id="caption"></div>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="contact-section">
        <div className="container-fluid">
          <h2 className="title">Contact</h2>
          <div className="row">
            <div className="left col-md-6"></div>
            <div className="right col-md-6">
              <h2>Get in touch with us to place a special order 😉</h2>
              <form>
                <input type="text" placeholder="Enter your phone number"/>
                <br />
                <textarea placeholder="Enter your order"></textarea>
                <br />
                <button type="submit">Place order</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Section */}
      <footer>
        <div className="container-fluid">
          <h1>Selene's</h1>

          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>

            <div className="social-media">
              <li><ion-icon name="logo-facebook"></ion-icon>Facebook</li>
              <li><ion-icon name="logo-twitter"></ion-icon>Twitter</li>
              <li><ion-icon name="logo-instagram"></ion-icon>Instagram</li>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
