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
                                <p>Join The Organic Movement!
Discover fresh and natural groceries sourced with care. Enjoy healthy products that bring quality, taste, and nutrition to your everyday meals.</p>
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