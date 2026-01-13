import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { createContext, useEffect, useState } from 'react';
import AddItems  from '../AddItems/AddItems.js';
import axios from 'axios';
import { port } from '../port/port.js';

export default function TableCart({setTotal}) {
  const [items, setItems] = useState([]);
  const [serverUpdate, setSever] =useState(true)

  useEffect(() => {
  
    axios.get(`${port}/cart`)
      .then((res) => {
        setItems(res.data);
        let sum= res.data.reduce((sum,item)=>{
          return sum+item.count*item.price
        },0)
        setTotal(sum)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [serverUpdate]); // runs every time when serverUpdate is changed

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Product</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
      {items.map((items, index) => (
        <tr key={index}>
          <td><button onClick={() => AddItems(items._id,setSever,serverUpdate,-items.count) } type="button" className="btn-close" aria-label="Close"></button></td>
          <td>{items.name}</td>
          <td><img src={items.image} alt={items.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
          <td>{items.price}</td>
          <td> 
            <button onClick={() => AddItems(items._id,setSever,serverUpdate,-1) } type="button" className="btn" style={{ padding: '0px 6px', fontSize: '14px' }}><FaMinus className='small-icon'/></button>
              {items.count}
            <button onClick ={() => AddItems(items._id,setSever,serverUpdate,1) } type="button" className="btn" style={{ padding: '0px 6px', fontSize: '14px' }}><FaPlus className='small-icon' /></button></td>
          <td>{(items.count)*items.price}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
    
  );
}