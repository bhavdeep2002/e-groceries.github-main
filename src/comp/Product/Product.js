import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props)
    // i am getting props object as props ={image:"",category:"",name:"",price:"",_id:""}
    // console.log(props)
   
  //  storing/holding our props data in state

  }

  render() {
        const {image,category,name,price,_id} =this.props
    return (
            <section>
            {/*remember Link tag becomes anchor tag in DOM /Rendered HTML but page does reloads*/}
            <Link className='LINK' to={`/ProductDetail/${_id}`}>{/* when i click on the product it will past the link in url and ${_id} reprents the _id of a particular product from  our Route will match path and render a component corresponding to that path */}
              <div className="card" style={{height:"55vh"}}>
                <img className='product-image card-img-top' src={image} alt="..." />
                <div className="card-body">
                  <div className="category">{category}</div>
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{price}</p>
                  <img className="fivestar" src="image/5-Stars-PNG-HD.png" />
                </div>
              </div>
            </Link>
            </section>
    );
    }
}

export default Product;