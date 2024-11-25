import React, { Component } from 'react';
import Servicecontainer from '../Service-container/Servicecontainer';
import Storedetail from '../StoreDetails/Storedetail';
import ProductsList from '../ProdustsLists/ProductsList';

class Home extends Component {
    render() {
        return (
            <div className="container-flex background-color">
                <div className="row">
                    <div className="col-md-12 upper-margin"></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                           <div className='row'>
                                <div className='col-md-3'></div>
                                <div className='col-md-9'><img className='bestselling' src='/image/bestselling.PNG'/></div>
                           </div>
                        </div>
                    </div>
                    {/*Store banner Best Quality Products */}
                    <Storedetail />
                </div>
                {/*Free Shipping */}
                <Servicecontainer />

                {/*Bestselling products component having props as heading Best Selling Products */}
                <ProductsList heading="Best Selling Products" urltype="bestselling" />
                {/*Bestselling products component having props as heading Trending Products */}
                <ProductsList heading="Trending Products" urltype="trending" />
                {/*Bestselling products component having props as heading Customers Reviews*/}
                <ProductsList heading="Customers Reviews" urltype="reviews" />
                
            </div>
        );
    }
}
export default Home;