<<<<<<< HEAD
import React from 'react';
import './style.scss';
import { landingPageCakes } from '../../Data';
import MenuItem from '../../components/MenuItem/MenuItem';

const LandingPage = props => {
  const { history, match } = props;

  return (
    <div className='landing'>
      <div className='header'>
        <h2 className='header-text'>Find out the sweet story behind our Mastery.</h2>
        <p className='header-subtext'>
          Everything we offer is made right here, from cookies to pasteries to cakes. Name them, we've got you covered.
=======
import React from "react";
import "./style.scss";
import { landingPageCakes } from "../../Data";
import MenuItem from "../../components/MenuItem/MenuItem";

const LandingPage = (props) => {
  const { history, match } = props;

  return (
    <div className="landing">
      <div className="header">
        {/* <div className='text-cta'> */}
        <h2 className="header-text">
          Find out the sweet story behind our Mastery.
        </h2>
        <p className="header-subtext">
          Everything we offer is made right here, from cookies to pasteries to
          cakes. Name them, we've got you covered.
>>>>>>> 24187d4ab60eb022ec5fdfa1ab0cfea51d00fe85
        </p>
      </div>

<<<<<<< HEAD
      <div className='landing-body'>
        <div className='call-to-action'>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <span style={{ display: 'inline-block', marginBottom: 30 }}>CHOOSE A CATEGORY</span>
            <div className='call-buttons'>
              <button onClick={() => history.push('/weddingcakepage')}>Wedding</button>
              <button onClick={() => history.push('/birthdaycake')}>Birthday</button>
              <button onClick={() => history.push(`/cupcakepage`)}>Cup cake</button>
              <button onClick={() => history.push(`/chocolate`)}>Chocolate</button>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            SOME OF OUR COLLECTIONS
            <div className='action call-products'>
              {landingPageCakes.map(item => {
                return <MenuItem key={item.id} item={item} />;
              })}
              <div id='myModal' className='modal'>
                <span className='close'>&times;</span>
                <img className='modal-content' id='img01' alt='' /> <div id='caption'></div>
=======
      {/* landing body */}
      <div className="landing-body">
        <div className="call-to-action">
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            CHOOSE A CATEGORY
            <div className="call-buttons">
              <button onClick={() => history.push("/weddingcakepage")}>
                Wedding
              </button>
              <button onClick={() => history.push("/birthdaycake")}>
                Birthday
              </button>
              <button onClick={() => history.push(`/cupcakepage`)}>
                Cup cake
              </button>
              <button onClick={() => history.push(`/chocolate`)}>
                Chocolate
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            SOME OF OUR COLLECTIONS
            <div className="action call-products">
              {landingPageCakes.map((item) => {
                return <MenuItem key={item.id} item={item} />;
              })}

              {/* The Modal */}
              <div id="myModal" className="modal">
                {/* The Close Button */}
                <span className="close">&times;</span>

                {/* Modal Content (The Image) */}
                <img className="modal-content" id="img01" alt="" />

                {/* Modal Caption (Image Text) */}
                <div id="caption"></div>
>>>>>>> 24187d4ab60eb022ec5fdfa1ab0cfea51d00fe85
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
