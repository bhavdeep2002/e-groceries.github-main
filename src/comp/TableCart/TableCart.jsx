import axios from 'axios';
import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

export default function TableCart({total}) {
  const [totalValue, setTotalValue] = useState(total);
  const [items, setItems] = useState([]);
  const [count, setCount] =useState({})
  const [serverUpdate, setSever] =useState(true)
  const [itemsWithCount, setItemsWithCount] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3012/cart")
      .then((res) => {
        // Preprocess data to accumulate quantities for items with the same name
      
        
        const counter = {}; // Initialize counter object , to store how same name items/object having same key name are presents in res.data array

        res.data.forEach(item => {// res.data is an array containing objects , each index is filled with object reference , here item resembles all objects present at each index
          counter[item.name] =(counter[item.name] || 0) +1 // counter[item.name] this will find weather counter object contain the key with the name item.name , here it item.name will change for each index , for example res.data =[{name:"coffee"},{name:"redchilli"}] here at each index the name is different and foreach loop would go through all the indexs present in counter .

          //counter={}
          //counter[item.name] --> counter["coffee"] as 0th index the name is "coffee" in res.data array
          // then this would check that the counter have a key named "coffee" or not, as the counter object is initially empty so the answer would be undefined of counter[item.name]
          // (counter[item.name] || 0) +1  --> (undefined || 0) +1 =(0)+1 =1
          // counter[item.name] = 1 this creates a key value pair of "coffee":1 in counter object 

        });

        setCount(counter);
        setItems(res.data);
      
      })
      .catch((e) => {
        console.log(e);
      });
  }, [serverUpdate]); // runs every time when serverUpdate is changed

  useEffect(() => {// this is used so that an item apears only once on the screen
    const aggregatedItems = {};
    items.forEach(item => {
      if (!aggregatedItems[item.name]) {
        aggregatedItems[item.name] = {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          count: count[item.name] || 0
        };
      }
    });

    setItemsWithCount(Object.values(aggregatedItems));
  }, [items, count]);


  useEffect(() => {
    let totalValue = 0;
    itemsWithCount.forEach(item => {
      totalValue += calculateSubtotal(item.price, item.count);
    });
    total(totalValue); // Pass total to parent component
  }, [itemsWithCount, total]);

// sub total calculate
  const calculateSubtotal = (price, quantity) => {
    price = parseFloat(price.replace("₹", ""));
    const parsedQuantity = parseInt(quantity); // Convert quantity to number using parseInt
  
    return price * parsedQuantity;
  }; 

  const addItem =(item) =>{
    delete item.id
    axios.post(`http://localhost:3012/cart`, item)
            .then((res) => {
              
                setSever(!serverUpdate)
            })
            .catch((e) => {
                console.log(e.response.data);
            });
  }
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
      {itemsWithCount.map((item, index) => (
        <tr key={index}>
          <td><button onClick={() => removeItem(item.id) } type="button" className="btn-close" aria-label="Close"></button></td>
          <td>{item.name}</td>
          <td><img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
          <td>{item.price}</td>
          <td> 
            <button onClick={() => removeItem(item.id) } type="button" className="btn" style={{ padding: '0px 6px', fontSize: '14px' }}><FaMinus className='small-icon'/></button>
              {item.count}
            <button onClick ={() => addItem(item) } type="button" className="btn" style={{ padding: '0px 6px', fontSize: '14px' }}><FaPlus className='small-icon' /></button></td>
          <td>{calculateSubtotal(item.price, item.count)}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
    
  );
}