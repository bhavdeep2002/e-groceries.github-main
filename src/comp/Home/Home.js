import React, { Component } from 'react';
import Servicecontainer from '../Service-container/Servicecontainer';
import Storedetail from '../StoreDetails/Storedetail';
import Bestsellingproduct from '../Bestsellingproduct/Bestsellingproduct';

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
                <Bestsellingproduct heading="Best Selling Products" urltype="bestselling-product" />
                {/*Bestselling products component having props as heading Trending Products */}
                <Bestsellingproduct heading="Trending Products" urltype="trending-product" />
                {/*Bestselling products component having props as heading Customers Reviews*/}
                <Bestsellingproduct heading="Customers Reviews" urltype="reviews" />
                
            </div>
        );
    }
}
export default Home;