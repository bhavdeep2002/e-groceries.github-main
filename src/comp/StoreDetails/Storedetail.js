import React, { Component } from 'react';
class Storedetail extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div id="head">
                                <h5>Best Quality Products</h5>
                            </div>
                            <div id="bestproduct">
                                <h1 style={{ fontSize: "50px" }}>Join The Organic <br /> Movement!</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ width: "20%" }}>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Storedetail;