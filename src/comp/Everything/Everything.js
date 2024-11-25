import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import FilterBarBootstrap from '../FilterBarBootstrap/FilerBarBootstrap';

export default function Everything() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchDropdown, setSearchDropdown] = useState([]);
  console.log(filteredProducts)
  useEffect(() => {
    axios.get('http://localhost:8080/everything')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (event) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchDropdown(filtered);
  };

  const setInputValue = (value) => {
    document.querySelector(".item").value = value;
  };

  const search = () => {
    const itemtosearch = document.getElementsByClassName("item")[0].value
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(itemtosearch.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const filterprice = (priceRange) => {
    const { min, max } = priceRange
    console.log(min)
    console.log(max)
    const filter = products.filter((item) => {
      const itemPrice = Number(item.price.replace("₹", "")); // Convert price to number

      return itemPrice >= min && itemPrice <= max;
    });
    setFilteredProducts(filter);
  }
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
            onChange={handleChange}
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {searchDropdown.map((item, index) => (
              <li key={index} onClick={() => setInputValue(item.name)}>
                <a className="dropdown-item" href="#">{item.name}</a>
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>
        </div>
        <FilterBarBootstrap filterprice={filterprice} />
      </div>
      <div className='row'>
        <div className="col-md-12" style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((p) => (
            <div className="col-md-3 card-div" style={{ width: "21%" }}>
              <Product
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                category={p.category}
                image={p.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
