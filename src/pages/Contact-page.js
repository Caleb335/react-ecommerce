import React from 'react';
import banner from '../../assets/img/td.jpg';

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
          backgroundImage: `url(${banner})`,
        }}
      >
        contact us
      </div>
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '65%' }}>
          <div>
            <h1>Contact Form</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                style={{ border: '1px solid black' }}
                type="text"
                placeholder="Name *"
              />
              <input
                style={{ border: '1px solid black' }}
                type="text"
                placeholder="Email *"
              />
              <input
                style={{ border: '1px solid black' }}
                type="text"
                placeholder="Subject *"
              />
              <textarea
                style={{ border: '1px solid black' }}
                rows="15"
                placeholder="Message *"
              ></textarea>
              <button
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Submit Message
              </button>
            </div>
          </div>
        </aside>
        <main>
          <div>
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
