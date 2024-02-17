import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default function Everything() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3012/everything')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleSearch = () => {
    axios.delete("")
  };

  return (
    <div className="container-flex background-color">
      <div className="row">
        <div className="col-md-12 upper-margin">
          {/* Some content here if needed */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)}  />
          <button  className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>
        </div>
        <div className="col-md-6">
          <div className='row'> {products.forEach((p) =>{
            if(searchQuery!=p.name){
              
            }
            else{
              <Product
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            category={p.category}
            image={p.image}
          />
            }
          } 
          )}</div>
        </div>
        <div className="col-md-3">
          {/* Some content here if needed */}
        </div>
      </div>
    </div>
  );
}
