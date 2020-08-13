import React from 'react';
import './style.scss';
//Importing Images
import birthday from '../../assets/img/cakes/birthday/birthday.jpg';
import birthday1 from '../../assets/img/cakes/birthday/birthday1.jpg';
import birthday2 from '../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from '../../assets/img/cakes/birthday/birthday3.jpg';
import birthday4 from '../../assets/img/cakes/birthday/birthday4.jpg';
import birthday5 from '../../assets/img/cakes/birthday/birthday5.jpg';

import cup from '../../assets/img/cakes/cup/cup.jpg';
import cup1 from '../../assets/img/cakes/cup/cup1.jpg';
import cup2 from '../../assets/img/cakes/cup/cup2.jpg';
import cup3 from '../../assets/img/cakes/cup/cup3.jpg';
import cup4 from '../../assets/img/cakes/cup/cup4.jpg';

const ProductPage = () => {
    return (
        <div className="product_page">
            <header></header>


            

            <div className="banner">
                <img src="" alt="" />


                <div>
                    <p>The Best Cakes in Every Category</p>
                    <input type="text" placeholder="Search for a cake..." />
                </div>
            </div>

            <div className="image-gallery">
                <div className="row">
                    <h2>Birthday Cakes</h2>

                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 1</h1>
                                <button href="#" class="btn btn-danger">Add to the card</button>
                            </div>
                        </div>

                    </div>
                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday1} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 2</h1>
                                <button href="#" className="btn btn-danger">Add to the card</button>
                            </div>
                        </div>


                    </div>
                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday2} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 3</h1>
                                <button href="#" className="btn btn-danger">Add to the card</button>
                            </div>
                        </div>


                    </div>
                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday3} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 4</h1>
                                <button href="#" className="btn btn-danger">Add to the card</button>
                            </div>
                        </div>


                    </div>
                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday4} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 5</h1>
                                <button href="#" className="btn btn-danger">Add to the card</button>
                            </div>
                        </div>


                    </div>
                    <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                        <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                            <div className='px-5 pt-5'>
                                <img src={birthday5} className="card-img-top img-fluid" />
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">cake 6</h1>
                                <button href="#" className="btn btn-danger">Add to the card</button>
                            </div>
                        </div>


                    </div>

                </div>


                <div className="cupcakes">
                    <div className="row">
                        <h2>Cup Cakes</h2>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 1</h1>
                                    <button href="#" class="btn btn-danger">Add to the card</button>
                                </div>
                            </div>

                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={cup} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">Cup cake</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                            </div>


                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={cup1} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">Cup cake</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                            </div>


                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={cup3} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">Cup cake</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                            </div>


                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={cup2} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">Cup cake</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                            </div>


                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6" style={{ borderRadius: "50%" }}>
                            <div className="card text-center shadow-lg " style={{ marginTop: "25px", marginBottom: "25px", borderRadius: "5%" }}>
                                <div className='px-5 pt-5'>
                                    <img src={cup4} className="card-img-top img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">Cup cake</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>



            </div>

                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 1</h1>
                                    <button href="#" class="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                    
                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday1}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 2</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                        
                    
                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday2}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 3</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                        
                    
                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday3}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 4</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                        
                    
                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday4}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 5</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                        
                    
                        </div>
                        <div className=" column col-lg-3 col-md-4 col-sm-6"  style={{borderRadius: "50%"}}>
                            <div className="card text-center shadow-lg " style={{marginTop: "25px", marginBottom: "25px", borderRadius: "5%"}}>
                                <div className='px-5 pt-5'>
                                    <img src={birthday5}  className="card-img-top img-fluid"/>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">cake 6</h1>
                                    <button href="#" className="btn btn-danger">Add to the card</button>
                                </div>
                        </div>
                        
                    
                        </div>
                        
            </div>
            

                <div className="cupcakes">
                    
                
                </div>
                

                <div></div>
            </div>

        </div>
    )
}

export default ProductPage;

