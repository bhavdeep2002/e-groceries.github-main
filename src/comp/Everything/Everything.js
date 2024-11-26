import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import FilterBarBootstrap from '../FilterBarBootstrap/FilerBarBootstrap';

export default function Everything() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/everything')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-flex background-color">
      <div className="row">
        <div className="col-md-12 upper-margin">
          {/* Upper margin content if needed */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <input
            style={{ backgroundColor: 'white', border: '1px solid' }}
            id='dropdownMenuButton1'
            className="btn dropdown-toggle item"
            type="search"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
          </ul>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
        <FilterBarBootstrap setProducts={setProducts} />
      </div>
      <div className='row'>
        <div className="col-md-12" style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((p,index)=>{    
           return <div  className="col-md-3 card-div" style={{ width: "21%" }}>
              <Product
              key={index}
                _id={p._id}
                name={p.name}
                price={p.price}
                category={p.category}
                image={p.image}
              />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
