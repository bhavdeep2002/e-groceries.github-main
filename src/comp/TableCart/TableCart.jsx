import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function TableCart() {
  const [items, setItems] = useState([]);
  const [count, setCount] =useState({})
  const [serverUpdate, setSever] =useState(true)
  useEffect(() => {
    axios.get("http://localhost:3012/cart")
      .then((res) => {
        // Preprocess data to accumulate quantities for items with the same name
      
        setItems(res.data); // Update the 'items' state with processed data
        const counter = {}; // Initialize counter object
        res.data.forEach(item => {
          counter[item.name] =(counter[item.name] || 0) +1
        });
        setCount(counter);
      
      })
      .catch((e) => {
        console.log(e);
      });
  }, [serverUpdate]); // Empty dependency array to execute only once when the component mounts

  useEffect(() => {
    console.log("hello")
    console.log(count);
  }, [count]); 

  const calculateSubtotal = (price, quantity) => {
    price = parseFloat(price.replace("₹", ""));
    const parsedQuantity = parseInt(quantity, 10); // Convert quantity to number using parseInt
    
    return price * parsedQuantity;
  };

  const removeItem = (itemId) => {
    axios.delete(`http://localhost:3012/cart/${itemId}`)
      .then(response => {
        // Update the state by filtering out the deleted item
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
        setSever(!serverUpdate)
      })
      .catch(error => {
        console.error('Error deleting item:', error);
        // Handle errors here, such as displaying an error message to the user
      });
  };

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
        {items.map((item, index) => (
          <tr key={index}>
            <td><button onClick={() => removeItem(item.id) } type="button" className="btn-close" aria-label="Close"></button></td>
            <td>{item.name}</td>
            <td><img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
            <td>{item.price}</td>
            <td>{count[item.name]}</td>
            <td>{calculateSubtotal(item.price, count[item.name])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}