import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import { Slider } from '@mui/material';
import { port } from '../port/port';

export default function Everything({ url }) {

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 40]);
  const [menu, setMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products based on price
  useEffect(() => {
    axios.get(`${port}/filter`, {
      params: { min: value[0], max: value[1] },
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [value]);

  // Fetch menu
  useEffect(() => {
    axios.get(`${port}/${url}`, {
      headers: { "Content-Type": "text/plain" }
    })
      .then((res) => {
        setMenu(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // 🔥 Derived filtered data
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container background-color">
      <div className='row'>

        {/* Sidebar */}
        <div className='col-md-3' style={{ border: "solid lightgray 2px", backgroundColor: "white", paddingTop: "2%" }}>
          
          {/* Search */}
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Suggestions */}
          <ul className='search_displayer'>
            {searchTerm && filteredProducts.map((i) => (
              <li key={i._id}>{i.name}</li>
            ))}
          </ul>

          {/* Price Slider */}
          <Slider
            style={{ color: 'green', margin: '5%', width: "90%" }}
            valueLabelDisplay='auto'
            min={0}
            max={40}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
          />

          {/* Menu */}
          <ol style={{ listStyle: "none" }}>
            <h6>Vegetables & Fruits</h6>
            {menu.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="" /> {item.name}
              </li>
            ))}
          </ol>
        </div>

        {/* Products */}
        <div className='col-md-9 item-dis'>
          {filteredProducts.map((i) => (
            <div className='col-md-3' key={i._id} style={{ margin: "3%" }}>
              <Product {...i} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}