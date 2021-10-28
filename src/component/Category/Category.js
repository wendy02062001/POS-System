import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScrollView } from "@cantonjs/react-scroll-view";
import './styleCategory.css';

export default function Category(props){
    let handleEndReached = () => {
        console.log("load more");
    };
   return (
    <div className="row container-fluid">
        <div className="col-8">
            <nav className="container">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-link active text-danger" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cupcake</a>
                <a class="nav-link text-danger" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Sea food</a>
                <a class="nav-link text-danger" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Juice</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/brownie-cupcake.jpeg" class="card-img-top w-100" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Brownie</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$9.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/cream-cupcake.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Cream Cupcake</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$9.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/red-velvet-cupcake.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Red Velvet Cupcake</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$9.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/lemon-cupcake.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lemon Cupcake</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$7.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/blackberry-cupcake.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Blackberry Cupcake</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$12.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                                    <img style={{height: '15rem'}} src="./img/blueberry-cupcake.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Blueberry Cupcake</h5>
                                        <div className="row">
                                            <div className="col-5">
                                                <p class="card-text align-center">$12.99</p>
                                            </div>
                                            <div className="col-7 text-center">
                                                <a href="#" class="btn btn-danger">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>    
        </div>
        <div className="col-4">
            <h2 className="text-danger">Your Cart (5)</h2>
            <ScrollView style={{ height: '70vh' }}>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/blueberry-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Blueberry Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    1
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $12.99
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/blackberry-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Blackberry Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    3
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $38.97
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Cream Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    1
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $9.99
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Cream Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    1
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $9.99
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Cream Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    1
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $9.99
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-2">
                <div className="col-2">
                    <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
                </div>
                <div className="col-8">
                    <h5>Cream Cupcake</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className="btn btn-danger mr-2">+</div>
                                    1
                            <div className="btn btn-danger ml-2">-</div>
                        </div>
                        <div className="col-4">
                            $9.99
                            <p style={{fontSize: '12px'}}>[VAT 10%]</p>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollView>
            <div className="row">
                <div className="col-6">
                    <h3>Total:</h3>
                </div>
                <div className="col-6">
                    <h2 className="text-danger">$100.89</h2>
                    <p style={{fontSize: '14px'}}>[VAT 10% = $9.79]</p>
                </div>
                <div className="col-12">
                    <button style={{width: '100%'}} className="btn btn-danger">PAYMENT</button>
                </div>
            </div>
        </div>
    </div>
   ) 
}