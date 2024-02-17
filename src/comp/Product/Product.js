import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props)
    // i am getting props object as props ={image:"",category:"",name:"",price:"",id:""}
    // console.log(props)
   
  //  storing/holding our props data in state
    this.state = {
      img: this.props.image,
      category: this.props.category,
      name: this.props.name,
      price: this.props.price,
      id: this.props.id
    }
  }

  render() {
        const {img,category,name,price,id} =this.state
    return (
        <div className="col-md-3">
            <section>   
            {/*remember Link tag becomes anchor tag in DOM /Rendered HTML but page does reloads*/}
            <Link className='LINK' to={`/ProductDetail/${id}`}>{/* when i click on the product it will past the link in url and ${id} reprents the id of a particular product from  our Route will match path and render a component corresponding to that path */}
              <div className="card">
                <img className='product-image card-img-top' src={img} alt="..." />
                <div className="card-body">
                  <div className="category">{category}</div>
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{price}</p>
                  <img className="fivestar" src="image/5-Stars-PNG-HD.png" />
                </div>
              </div>
            </Link>
            </section>
        </div>
    );
    }
}

export default Product;