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
        
        const counter = {}; // Initialize counter object , to store how same name items/object having same key name are presents in res.data array

        const itemsWithCount = res.data.forEach(item => {// res.data is an array containing objects , each index is filled with object reference , here item resembles all objects present at each index
          counter[item.name] =(counter[item.name] || 0) +1 // counter[item.name] this will find weather counter object contain the key with the name item.name , here it item.name will change for each index , for example res.data =[{name:"coffee"},{name:"redchilli"}] here at each index the name is different and foreach loop would go through all the indexs present in counter .

          //counter={}
          //counter[item.name] --> counter["coffee"] as 0th index the name is "coffee" in res.data array
          // then this would check that the counter have a key named "coffee" or not, as the counter object is initially empty so the answer would be undefined of counter[item.name]
          // (counter[item.name] || 0) +1  --> (undefined || 0) +1 =(0)+1 =1
          // counter[item.name] = 1 this creates a key value pair of "coffee":1 in counter object 

          return {
            name: item.name,
            count: counter[item.name],
            image: item.image,
            price: item.price
          };
        });
        setCount(counter);
      
      })
      .catch((e) => {
        console.log(e);
      });
  }, [serverUpdate]); // runs every time when serverUpdate is changed

  useEffect(() => {
    console.log(count);
  }, [count]); 

  const calculateSubtotal = (price, quantity) => {
    price = parseFloat(price.replace("₹", ""));
    const parsedQuantity = parseInt(quantity); // Convert quantity to number using parseInt
    
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