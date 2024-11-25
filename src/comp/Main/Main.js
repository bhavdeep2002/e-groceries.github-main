import React, { Component } from 'react';
import Home from '../Home/Home.js';
import {Routes, Route } from 'react-router-dom';
import Everything from "../Everything/Everything.js"
import Groceries from "../Groceries/Groceries.js"
import Juice from "../Juice/Juice.js"
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import Description from '../Description/Description.jsx';
import Reviews from '../Reviews/Reviews.js';
import Cart from '../Cart/Cart.js';


class Main extends Component {
    render() {
        return (
            <main style={{overflowX:'hidden'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Everything" element={<Everything />} />
                    <Route path="/Groceries" element={<Groceries />} />
                    <Route path="/Juice" element={<Juice />} />
                    <Route path='/ProductDetail/:_id' element={<ProductDetail /> } >{/* this the path what i am going to match from url to display ProductDetail component ,here id is dynamic means it can be 1,2,3,4 */}
                        <Route path='Description' element={<Description />} />
                        {/* this is the Child Component of ProductDetail actually when i render the ProductDetail Component its Child component FrontProduct also get redered and inside that FrontProduct Description Component is Going to render on click by Link tag   */} 
                        <Route path='Review' element={<Reviews />} />
                    </Route> 
                    <Route path='/ViewCart' element={<Cart />} />
                </Routes>
            </main>
        );
    }
}

export default Main;