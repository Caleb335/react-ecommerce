import React from 'react';
import banner from '../../assets/img/td.jpg';
const AboutUsPage = () => {
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
        about us
      </div>
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '65%' }}>
          <div>
            <h1>Who are we?</h1>
            <div>
              <p>
                The "Cake Shop" is a Jordanian Brand that started as a small
                family business.
              </p>

              <p>
                The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati,
                supported by a staff of 80 employees.
              </p>

              <p>
                Although not small any more, the business tries to keep the
                family atmosphere where we care not only about our company, our
                products and our staff, but also we consider each "customer" a
                member in this family of "cake shoppers".
              </p>

              <p>
                Our mission is to make people happy. Making delicious cakes,
                having relaxing chairs in a smoking free environment and keeping
                our prices reasonable are all different ways to achieve this
                goal.
              </p>
            </div>
          </div>
        </aside>
        <main>
          <div>something goes here</div>
        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;
