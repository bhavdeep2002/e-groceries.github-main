import React, { Component } from 'react';
import Service from '../Service/Service';
import Bestsellingproduct from '../Bestsellingproduct/Bestsellingproduct';

class Servicecontainer extends Component {
    constructor() {
        super()
        this.state = {
            freeshopingimg: "/image/tr.PNG"
            , certifiedimg: "/image/certified.PNG"
            , hugesaving: "/image/hugesave.PNG"
            , easyreturn: "/image/recycle.PNG"
        }
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12" style={{ backgroundColor: 'black', color: "white" }}>
                        <div className="container">
                            <div className="row">
                                <Service img={this.state.freeshopingimg} heading="Free Shipping" description="Above $5 Only" />
                                <Service img={this.state.certifiedimg} heading="Certified Organic" description="100% Guarantee" />
                                <Service img={this.state.hugesaving} heading="Huge Savings" description="At Lowest Price" />
                                <Service img={this.state.easyreturn} heading="Easy Returns" description="No Questions Asked" />
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Servicecontainer;