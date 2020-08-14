import React from 'react';
import './style.scss';
import { landingPageCakes } from '../../Data';
import MenuItem from '../../components/MenuItem/MenuItem';

const LandingPage = props => {
  const { history } = props;

  return (
    <div className='landing'>
      <div className='header-landing'>
        <h2 className='header-text'>Find out the sweet story behind our Mastery.</h2>
        <p className='header-subtext'>From cookies to pasteries to cakes. Name them, we've got you covered.</p>
      </div>

      <div className='landing-body'>
        <div className='call-to-action'>
          <div className='cta-div1'>
            <span className='cta-span1' style={{}}>
              CHOOSE A CATEGORY
            </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
