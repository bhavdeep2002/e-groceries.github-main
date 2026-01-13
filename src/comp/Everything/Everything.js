import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import { Slider } from '@mui/material';
import { port } from '../port/port';

export default function Everything({url}) {
  
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 40])
  const [menu,setMenu] =useState([])
  const [searcher,setSearch]= useState()

  useEffect(() => {
    axios.get(`${port}/filter`, { params: { min: value[0], max: value[1] } }, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [value]);

  useEffect(()=>{
    axios.get(`${port}/${url}`,{headers:{"Content-Type":"text/plain"}})
    .then((res)=>{
      setMenu(res.data)
    })
    .catch((e)=>{
      console.log(e.message)
    })
  },[])

  const search =(e)=>{

    axios.get(`${port}/search/${searcher}`,{headers:{"Content-Type":"application/json"}})
    .then((res)=>{
      setProducts(res.data)
    })
    .catch((e)=>{
      console.log("eeee")
    })
  }

  return (
    <div className="container background-color">
      <div className="row">
        <div className="col-md-12 upper-margin">
          {/* Upper margin content if needed */}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3' style={{ border: "solid lightgray 2px", backgroundColor: "white", paddingTop: "2%" }}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearch(e.target.value)} />
          <button style={{ marginTop: "5px" }} className="btn btn-outline-success" onClick={(e)=>{search(e)}} type="submit">Search</button>

          <Slider style={{ color: 'green', margin: '5%', width: "90%" }} valueLabelDisplay='auto' getAriaValueText={(price) => { return `${price}` }} min={0} max={40} onChange={(e) => { setValue(e.target.value) }} value={value} />
          <ol style={{ listStyle: "none" }}><h6>Vegitables & Friuts</h6>
          {menu.map((item,index)=>{return <li key={index}><img src={item.image} />{item.name}</li>})}
          </ol>
        </div>
        <div className='col-md-9' style={{ display: "flex", flexWrap: "wrap" }}>
          {products && products.map((i, index) => {
            return <div className='col-md-3' key={index} style={{ margin: "3%" }}>
              <Product _id={i._id} name={i.name} category={i.category} price={i.price} image={i.image} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
