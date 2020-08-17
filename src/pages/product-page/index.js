import React from 'react';
import './style.scss';
import { birthdayCakes, weddingCakes, cupCakes, others } from '../../Data';
import ProductPageCard from '../../components/ProductPageCard/ProductPageCard';
import Header from '../../components/header/header'

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: ''
    };
  }

  onSearchChange(event) {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    // destructuring state
    const { searchField } = this.state;

    return (
      <div className='product_page'>
        <Header />
        <div className='banner'>
          <div>
            <p>The Best Cakes in Every Category</p>
            <input onChange={event => this.onSearchChange(event)} type='search' placeholder='Search for a cake...' />
          </div>
        </div>

        <div className='image-gallery'>
          <div className='row'>
            <h2>Birthday Cakes</h2>

            {/* instead of hard coding the UI of multiple cake cards you can use the
             * javascript map method to represent the UI
             * It saves you the stress of having to copy and paste on multiple lines
             * therefore, making our code shorter and cleaner.
             */}

            {/*
             in addition, since we can observe thatt we are using the same template for each cake,
             we can simply write that html code somewhere and store as a component, then we import. 
             */}

            {birthdayCakes
              .filter(cake => cake.name.toLowerCase().includes(searchField.toLowerCase()))
              .map(item => {
                return <ProductPageCard key={item.id} item={item} />;
              })}
          </div>

          {/* cup cakes section */}
          <div className='cupcakes'>
            <div className='row'>
              <h2>Cup Cakes</h2>
              {cupCakes
                .filter(cake => cake.name.toLowerCase().includes(searchField.toLowerCase()))
                .map(item => {
                  return <ProductPageCard key={item.id} item={item} />;
                })}
            </div>
          </div>

          {/* wedding cakes section */}
          <div className='cupcakes'>
            <div className='row'>
              <h2>Wedding Cakes</h2>
              {weddingCakes
                .filter(cake => cake.name.toLowerCase().includes(searchField.toLowerCase()))
                .map(item => {
                  return <ProductPageCard key={item.id} item={item} />;
                })}
            </div>

            {/* other types of cake */}
            <div className='cupcakes'>
              <div className='row'>
                <h2>Other cakes</h2>
                {others
                  .filter(cake => cake.name.toLowerCase().includes(searchField.toLowerCase()))
                  .map(item => {
                    return <ProductPageCard key={item.id} item={item} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
