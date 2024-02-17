import React, { Component } from 'react';
import Product from '../Product/Product'
import axios from 'axios';
import Headingh2 from '../Headingh2/Headingh2';

class Bestsellingproduct extends Component {

    constructor(props) {{/* first constructor is run */}
       {/*in this i have reviced the props and in props a key urltype is there,whose value can be bestselling-product , trending-product ,reviews and an other key heading is also there whose value can be 
    Best Selling Products, Trending Products ,Customers Reviews */}    
        super(props)
   
        
        {/*this is state where i store the data  */}
        this.state = {
            products: [],
            url: ""
        }

     
        if (this.props.urltype === "bestselling-product") {
            this.state.url = "http://localhost:3012/product"
        }
        else if (this.props.urltype === "trending-product") {
            this.state.url = "http://localhost:3012/trending"
        }
        else if (this.props.urltype === "reviews") {
            this.state.url = "http://localhost:3012/reviews"
        }


    }
 
    componentDidMount() {
        // it is called in last when component has mounted
        // but if we have multiple component then first component constructor ,first component render and vise vicera for other means constructor and render method will called synchronousely and didMount is asynchronus (parallel execution) 
      
       axios.get(this.state.url)
       .then((res) => {
           const product = res.data;
           this.setState({ products: product }); // Update state with product data
        })
       .catch((e) => {
           console.log("Error " + e);
     });
    }

    display(id){
        console.log(id)
    }

    render() {
        //second render will run
        {console.log(this.state.products)} //this shows data will be added to products array after ComponentDidMount
        // console.log(this.props.urltype +" render")
        return (
            <section>
                <Headingh2 heading={this.props.heading} />

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                {this.state.products.map((p) => {
                                    return (
                                      <Product id={p.id} key={p.id} name={p.name} price={p.price} category={p.category} image={p.image}  />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Bestsellingproduct;