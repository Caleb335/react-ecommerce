import React from 'react';
import banner from '../../assets/img/td.jpg';
import './style.scss';

const ContactPage = () => {
  return (
    <div>
      <div
        style={{
          height: 250,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${banner})`
        }}
      >
        contact us
      </div>
      <div className='contain'>
        <aside className='containerBody'>
          <div className='formContainer'>
            <h1>Leave a Message</h1>
            <div className='contactForm'>
              <input className='inputField1' type='text' placeholder='Name *' />
              <input className='inputField1' type='text' placeholder='Email *' />
              <input className='inputField1' type='text' placeholder='Subject *' />
              <textarea className='inputField2' rows='15' placeholder='Message *'></textarea>
              <button
                className='submitButton'
                onClick={event => {
                  event.preventDefault();
                }}
              >
                Submit Message
              </button>
            </div>
          </div>
        </aside>
        <main className='containerBody2'>
          <div className='formContainer'>
            <h1>Contact Details</h1>
            <div>
              <h3>Address:</h3>
              <h4>Lorem Ipsum </h4>
            </div>
            <div>
              <h3>Phone:</h3>
              <h4>0810WEJAPA!</h4>
            </div>
            <div>
              <h3>Mail:</h3>
              <h4>reactteamb@wejapa.com</h4>
            </div>
            <div>
              <h3>Website and Social</h3>
              <h4>Lorem Ipsum </h4>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;
